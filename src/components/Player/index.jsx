import { PlayerIndicator, Icon } from './style';

import X from '../../assets/icons/x.png';
import O from '../../assets/icons/o.png';

const Player = ({ player }) => (
  <PlayerIndicator>
    Its
    {(player === 'X') && <Icon src={X} alt="X icon" />}
    {(player === 'O') && <Icon src={O} />}
    turn!
  </PlayerIndicator>
);

export default Player;
