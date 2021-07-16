import X from '../../assets/icons/x.png';
import O from '../../assets/icons/o.png';

import { Item, Icon } from './style';

const GridItem = ({ onClick, disabled, value }) => (
  <Item
    disabled={disabled}
    onClick={onClick}
  >
    {(value === 'X') && <Icon src={X} alt="X icon" />}
    {(value === 'O') && <Icon src={O} />}
  </Item>

);

export default GridItem;
