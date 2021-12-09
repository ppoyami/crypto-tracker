import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        blue_soft: string;
        cyan: string;
      };
      background: string;
      background_elevation: string;
      line: string;
      text: string;
    };
  }
}
