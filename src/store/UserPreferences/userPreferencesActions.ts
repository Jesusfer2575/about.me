import { Action } from './userPreferences.types';

export const ACTIONS = {
  SET_INVERSE_THEME: 'SET_INVERSE_THEME',
};

export const setInverseThemeAction = (dispatch: React.Dispatch<Action>) => (theme: string) => {
  dispatch({
    type: ACTIONS.SET_INVERSE_THEME,
    payload: theme,
  });
};
