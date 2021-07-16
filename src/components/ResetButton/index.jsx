import reload from '../../assets/icons/reload.png';

import { Icon, Button } from './style';

const ResetButton = ({ action }) => (
  <Button onClick={() => action()}>
    <Icon src={reload} />
  </Button>
);

export default ResetButton;
