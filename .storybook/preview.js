import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import theme from '../src/styles/Theme';
import muiTheme from '../src/styles/MuiTheme';
import reset from '../src/styles/reset';
import { Global } from '@emotion/react';

export const decorators = [
  (Story) => (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <Story />
      </ThemeProvider>
    </MuiThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
