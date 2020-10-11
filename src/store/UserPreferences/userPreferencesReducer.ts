import { ACTIONS } from './userPreferencesActions';
import { State, Action } from './userPreferences.types';

export function userPreferencesReducer(state: State, action: Action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SET_INVERSE_THEME:
      return {
        ...state,
        theme: payload,
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}
