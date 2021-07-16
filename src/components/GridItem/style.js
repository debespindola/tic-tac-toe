import styled from 'styled-components';
import theme from '../../assets/theme/index';

export const Item = styled.button`
  height: 100%;
  width: 100%;

  border: none;
  outline: none;

  border-radius: 10px;
  background: ${theme.colors.darkPurple};

  transition: 0.3s;
    
  :disabled {
    background: ${theme.colors.opacityPurple};
  }

  :hover {
    transform: scale(1.03);
  }
`;

export const Icon = styled.img`
  width: 40px;
`;
