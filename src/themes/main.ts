import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

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

// lightTheme = responsiveFontSizes(lightTheme);

lightTheme.typography.h3 = {
  fontSize: '3rem',
  fontWeight: 'normal',
  [lightTheme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
};

lightTheme.typography.h6 = {
  fontSize: '1.25rem',
  fontWeight: 'normal',
  [lightTheme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
  },
};

lightTheme.typography.subtitle1 = {
  fontSize: '1rem',
  fontWeight: 'normal',
  [lightTheme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
  },
};

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

// darkTheme = responsiveFontSizes(darkTheme);
darkTheme.typography.h3 = {
  fontSize: '3rem',
  fontWeight: 'normal',
  [lightTheme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
};

darkTheme.typography.h6 = {
  fontSize: '1.25rem',
  fontWeight: 'normal',
  [lightTheme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
  },
};

darkTheme.typography.subtitle1 = {
  fontSize: '1rem',
  fontWeight: 'normal',
  [lightTheme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
  },
};
