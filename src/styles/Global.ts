import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Global = createGlobalStyle`
  ${reset}
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text}
  }
`;

export default Global;
