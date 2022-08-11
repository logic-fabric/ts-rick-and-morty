import { IState } from "./store";
import {
  FETCH_ALL_CHARACTERS,
  FETCH_ALL_EPISODES,
  LIKE_EPISODE,
  UNLIKE_EPISODE,
  IAction,
} from "./actions";

export function reducer(state: IState, action: IAction): IState {
  let updatedLikedEpisodes: Set<number>;

  switch (action.type) {
    case FETCH_ALL_CHARACTERS:
      return {
        ...state,
        characters: action.payload.characters,
      };

    case FETCH_ALL_EPISODES:
      return {
        ...state,
        episodes: action.payload.episodes,
      };

    case LIKE_EPISODE:
      updatedLikedEpisodes = new Set(state.likedEpisodes);
      updatedLikedEpisodes.add(action.payload.id);

      return {
        ...state,
        likedEpisodes: updatedLikedEpisodes,
      };

    case UNLIKE_EPISODE:
      updatedLikedEpisodes = new Set(state.likedEpisodes);
      updatedLikedEpisodes.delete(action.payload.id);

      return {
        ...state,
        likedEpisodes: updatedLikedEpisodes,
      };
  }

  return state;
}
