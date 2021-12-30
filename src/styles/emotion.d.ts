import '@emotion/react';
import MuiTheme from './Theme';

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {
    colors: {
      shoplBlue: string;
      gray: string;
      black: string;
      paleGray: string;
    };
    button: {
      primary: {
        background: string;
      };
      secondary: {
        background: string;
      };
      tertiary: {
        background: string;
      };
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
