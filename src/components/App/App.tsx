import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import useUserPreferenceContext, {
  UserPreferencesProvider,
} from '../../store/UserPreferences/useUserPreferencesContext';
import { Router } from '../Router';
import { darkTheme, lightTheme } from '../../themes/main';

function App() {
  const { theme } = useUserPreferenceContext();
  const currentTheme = theme === 'dark' ? lightTheme : darkTheme;

  return (
    <UserPreferencesProvider>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </UserPreferencesProvider>
  );
}

export default App;
