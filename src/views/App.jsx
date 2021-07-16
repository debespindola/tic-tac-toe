import { Board } from '../components/index';
import SwitchProvider from '../helpers/SwitchProvider';

import { Body, Title } from './style';

const App = () => (
  <Body>
    <Title>Tic Tac Toe</Title>
    <SwitchProvider>
      <Board />
    </SwitchProvider>
  </Body>
);

export default App;
