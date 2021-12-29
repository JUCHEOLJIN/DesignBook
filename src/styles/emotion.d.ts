import '@emotion/react';
import MuiTheme from './Theme';

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {
    colors: {
      shoplBlue: string;
      shoplRed: string;
      shoplBlack: string;
    };
    palette: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
    };
  }
}
