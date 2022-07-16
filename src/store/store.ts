import { createContext } from "react";

export interface IState {
  episodes: [];
  favorites: [];
}

export const initialState: IState = {
  episodes: [],
  favorites: [],
};

export const StoreContext = createContext<IState | any>(initialState);
