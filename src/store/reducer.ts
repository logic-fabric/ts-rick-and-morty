import { IState } from "./store";
import { FETCH_ALL_EPISODES, IAction } from "./actions";

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case FETCH_ALL_EPISODES:
      return {
        ...state,
        episodes: action.payload,
      };
  }

  return state;
}
