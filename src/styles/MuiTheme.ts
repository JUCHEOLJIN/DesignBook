import { createTheme } from '@mui/material/styles';
import { SERVFAIL } from 'dns';

export default createTheme({
  typography: {
    // fontFamily: 'SpoqaHanSans',
    fontFamily: "'Lato', 'Noto Sans KR', 'Noto Sans JP', sans-serif",
  },
  palette: {
    primary: {
      main: '#3299fe',
    },
    secondary: {
      main: '#35485b',
    },
    common: {},
    background: {
      default: '#f9f9f9',
    },
    text: {
      secondary: '#333333',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '14px',
        },
      },
    },
  },
});
