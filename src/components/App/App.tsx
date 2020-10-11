import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import useUserPreferenceContext from '../../store/UserPreferences/useUserPreferencesContext';
import { Router } from '../Router';
import { darkTheme, lightTheme } from '../../themes/main';

function App() {
  const { theme } = useUserPreferenceContext();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
