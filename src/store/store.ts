import { createContext } from "react";

export interface IState {
  characters: [];
  episodes: [];
}

export const initialState: IState = {
  characters: [],
  episodes: [],
};

export const StoreContext = createContext<IState | any>(initialState);
