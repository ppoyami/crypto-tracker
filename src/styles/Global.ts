import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Global = createGlobalStyle`
  ${reset}
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text}
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default Global;
