import '@emotion/react';
import { StepIconProps } from '@mui/material';
import MuiTheme from './Theme';

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {
    colors: {
      shoplBlue: string;
      grey: string;
      black: string;
      white: string;
      paleGrey: string;
      stone: string;
      lightGrey: string;
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
