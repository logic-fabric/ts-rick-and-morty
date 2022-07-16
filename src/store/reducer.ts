import { IState } from "./store";

const FETCH_DATA = "FETCH_DATA";

interface IAction {
  type: string;
  payload: any;
}

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        episodes: action.payload,
      };
  }

  return state;
}
