export const FETCH_ALL_CHARACTERS = "FETCH_ALL_CHARACTERS";
export const FETCH_ALL_EPISODES = "FETCH_ALL_EPISODES";

const GET_ALL_CHARACTERS_URL = "https://rickandmortyapi.com/api/character";
const GET_ALL_EPISODES_URL = "https://rickandmortyapi.com/api/episode";

export interface IAction {
  type: string;
  payload: any;
}

export interface ICharacter {
  id: number;
  image: string;
  name: string;
}

export interface IEpisode {
  airDate: string;
  id: number;
  name: string;
  position: number;
  season: number;
}

export const fetchAllCharactersAction = async (dispatch: Function) => {
  let rawCharacters: any[] = [];
  let url: string = GET_ALL_CHARACTERS_URL;

  while (url) {
    const data = await fetch(url);
    const json = await data.json();

    rawCharacters = [...rawCharacters, ...json.results];
    url = json.info.next;
  }

  const characters: ICharacter[] = [];

  for (let rawCharacter of rawCharacters) {
    const character: ICharacter = {
      id: rawCharacter.id,
      image: rawCharacter.image,
      name: rawCharacter.name,
    };

    characters.push(character);
  }

  return dispatch({
    type: FETCH_ALL_CHARACTERS,
    payload: { characters },
  });
};

export const fetchAllEpisodesAction = async (dispatch: Function) => {
  let rawEpisodes: any[] = [];
  let url: string = GET_ALL_EPISODES_URL;

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
    payload: { episodes },
  });
};
