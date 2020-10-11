export interface State {
  theme: string;
}

export interface Action {
  type: string;
  payload: string;
}

export interface Context {
  theme: string;
  // eslint-disable-next-line
  setInverseTheme: (theme: string) => void;
}

export type ProviderProps = {
  children: React.ReactNode;
};
