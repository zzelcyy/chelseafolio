import { createGlobalStyle } from 'styled-components';
import { palette } from 'constants/index';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Pretendard-Regular';
    color: ${palette.black[900]};
  }
`;

export default GlobalStyle;
