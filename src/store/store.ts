import { createContext } from "react";

export interface IState {
  characters: [];
  episodes: [];
  likedEpisodes: Set<number>;
}

export const initialState: IState = {
  characters: [],
  episodes: [],
  likedEpisodes: new Set(),
};

export const StoreContext = createContext<IState | any>(initialState);
