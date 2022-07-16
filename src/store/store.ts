import { createContext } from "react";

export interface IState {
  episodes: [];
  favorites: [];
}

const initialState: IState = {
  episodes: [],
  favorites: [],
};

export const StoreContext = createContext<IState>(initialState);
