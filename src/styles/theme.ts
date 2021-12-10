interface ITheme {
  [key: string]: {
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
  };
}

const Theme: ITheme = {
  light: {
    colors: {
      primary: {
        blue_soft: 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
      },
      background: 'hsl(0, 0%, 100%)',
      background_elevation: 'whitesmoke',
      line: 'hsl(215, 32%, 27%)',
      text: 'hsl(217, 54%, 11%)',
    },
  },
  dark: {
    colors: {
      primary: {
        blue_soft: 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
      },
      background: 'hsl(217, 54%, 11%)',
      background_elevation: 'hsl(216, 50%, 16%)',
      line: 'hsl(215, 32%, 27%)',
      text: 'hsl(0, 0%, 100%)',
    },
  },
};

export default Theme;
