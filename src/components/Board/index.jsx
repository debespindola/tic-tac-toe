import { useState, useContext, useEffect } from 'react';

import { SwitchPlayerContext } from '../../helpers/SwitchProvider';
import {
  RowChecker, ColumnChecker, DiagonalChecker, EndGame,
} from '../../helpers/VictoryConditions';
import { BoardContainer } from './style';

import GridItem from '../GridItem/index';
import ResetButton from '../ResetButton/index';
import Player from '../Player/index';

const Board = () => {
  const { switchValue, switchDispatch } = useContext(SwitchPlayerContext);

  const emptyMatrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [matrix, setMatrix] = useState(emptyMatrix);

  const handleMatrix = (i, j) => {
    switchDispatch({ type: 'SWITCH' });

    setMatrix([
      ...matrix.slice(0, i),
      [
        ...matrix[i].slice(0, j),
        switchValue ? 'X' : 'O',
        ...matrix[i].slice(j + 1, matrix[i].length),
      ],
      ...matrix.slice(i + 1, matrix.length),
    ]);
  };

  const resetGame = () => setMatrix(emptyMatrix);

  const victoryChecker = () => {
    if (RowChecker(matrix) || ColumnChecker(matrix) || DiagonalChecker(matrix)) {
      alert(`${!switchValue ? 'X' : 'O'} won!`);
      resetGame();
    }
  };

  const checkDraw = () => {
    if (EndGame(matrix)) {
      alert('Nobody won!');
      resetGame();
    }
  };

  useEffect(() => {
    victoryChecker();
    checkDraw();
  }, [matrix]);

  return (
    <>
      <Player player={switchValue ? 'X' : 'O'} />
      <BoardContainer>
        {matrix.map((row, i) => row.map((item, j) => (
          <GridItem
            disabled={matrix[i][j] !== null}
            value={item}
            onClick={() => handleMatrix(i, j)}
          />
        )))}

      </BoardContainer>
      <ResetButton action={resetGame} />
    </>
  );
};

export default Board;
