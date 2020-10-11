import React, { useEffect, createContext } from 'react';
import { userPreferencesReducer } from './userPreferencesReducer';
import { setInverseThemeAction } from './userPreferencesActions';
import { Context, ProviderProps } from './userPreferences.types';

const userPreferencesStorageKeyPrefix = 'USER-PREFERENCES';
const initialState = {
  theme: 'light',
};

const getUserStorageKey = () => `${userPreferencesStorageKeyPrefix}`;

const UserPreferencesContext = createContext<Context>({
  theme: 'light',
  setInverseTheme: () => null,
});

export const UserPreferencesProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = React.useReducer(userPreferencesReducer, {
    ...initialState,
    ...(localStorage.getItem(getUserStorageKey()) ? JSON.parse(localStorage.getItem(getUserStorageKey()) || '') : {}),
  });

  const value = {
    ...state,
    setInverseTheme: setInverseThemeAction(dispatch),
  };

  useEffect(() => {
    localStorage.setItem(
      getUserStorageKey(),
      JSON.stringify({
        theme: state.theme,
      })
    );
  }, [state.theme]);

  return <UserPreferencesContext.Provider value={value}>{children}</UserPreferencesContext.Provider>;
};

export default function useUserPreferencesContext() {
  return React.useContext(UserPreferencesContext);
}
