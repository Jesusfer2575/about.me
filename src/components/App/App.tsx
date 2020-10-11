import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from '../Layout/Layout';
import useUserPreferenceContext, {
  UserPreferencesProvider,
} from '../../store/UserPreferences/useUserPreferencesContext';
import { darkTheme, lightTheme } from '../../themes/main';
import { Home } from '../Home';

function App() {
  const { theme } = useUserPreferenceContext();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <UserPreferencesProvider>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </UserPreferencesProvider>
  );
}

export default App;
