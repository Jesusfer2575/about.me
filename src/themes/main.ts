import { createMuiTheme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#7A1DDE',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      paper: '#424242',
    },
    text: {
      primary: '#FFFFFF',
    },
    divider: '#6C6B6B',
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#EC4F4F',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      paper: '#424242',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
});
