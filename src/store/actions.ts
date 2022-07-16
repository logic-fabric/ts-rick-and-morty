const ALL_EPISODES_ENDPOINT = "https://rickandmortyapi.com/api/episode";

export interface IAction {
  type: string;
  payload: any;
}

export const FETCH_ALL_EPISODES = "FETCH_ALL_EPISODES";

export const fetchAllEpisodesAction = async (dispatch: Function) => {
  let episodes: any[] = [];
  let url = ALL_EPISODES_ENDPOINT;

  while (url) {
    const data = await fetch(url);
    const json = await data.json();

    episodes = [...episodes, ...json.results];
    url = json.info.next;
  }

  return dispatch({
    type: FETCH_ALL_EPISODES,
    payload: episodes,
  });
};
