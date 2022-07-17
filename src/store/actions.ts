const ALL_EPISODES_ENDPOINT = "https://rickandmortyapi.com/api/episode";

export interface IAction {
  type: string;
  payload: any;
}

export interface IEpisode {
  airDate: string;
  id: number;
  name: string;
  position: number;
  season: number;
}

export const FETCH_ALL_EPISODES = "FETCH_ALL_EPISODES";

export const fetchAllEpisodesAction = async (dispatch: Function) => {
  let rawEpisodes: any[] = [];
  let url: string = ALL_EPISODES_ENDPOINT;

  while (url) {
    const data = await fetch(url);
    const json = await data.json();

    rawEpisodes = [...rawEpisodes, ...json.results];
    url = json.info.next;
  }

  const episodes: IEpisode[] = [];

  for (let rawEpisode of rawEpisodes) {
    const episode: IEpisode = {
      airDate: rawEpisode.air_date,
      id: rawEpisode.id,
      name: rawEpisode.name,
      position: parseInt(rawEpisode.episode.slice(5, 7)),
      season: parseInt(rawEpisode.episode.slice(1, 4)),
    };

    episodes.push(episode);
  }

  return dispatch({
    type: FETCH_ALL_EPISODES,
    payload: episodes,
  });
};
