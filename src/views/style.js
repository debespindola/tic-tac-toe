import styled from 'styled-components';

import theme from '../assets/theme/index.js';
import SFPro from '../assets/fonts/SFProDisplay-Regular.ttf';

export const Body = styled.body`
  background-color: ${theme.colors.background};
  
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @font-face {
    font-family: 'SF Pro Display';
    src: url(${SFPro}) format('truetype');
  }

  font-family: 'SF Pro Display'

`;

export const Title = styled.h1`
  font-size: 40px;

  color: #000;
`;
