import React, { useContext, useEffect } from "react";

import styled from "styled-components";

import { CharacterCard } from "../../components/Card/CharacterCard";
import { EpisodeCard } from "../../components/Card/EpisodeCard";

import { StoreContext } from "../../store/store";
import {
  fetchAllCharactersAction,
  fetchAllEpisodesAction,
  ICharacter,
  IEpisode,
} from "../../store/actions";

export function HomePage(): JSX.Element {
  const { store, dispatch } = useContext(StoreContext);

  useEffect(() => {
    if (store.characters.length === 0) {
      fetchAllCharactersAction(dispatch);
    }

    if (store.episodes.length === 0) {
      fetchAllEpisodesAction(dispatch);
    }

    console.log({ store });
  }, [store, dispatch]);

  return (
    <main>
      <h1>Rick and Morty mini app</h1>

      <section>
        <h2>Episodes</h2>

        <Grid>
          {store.episodes.map((episode: IEpisode) => (
            <li key={episode.id}>
              <EpisodeCard episode={episode} />
            </li>
          ))}
        </Grid>
      </section>

      <section>
        <h2>Characters</h2>

        <Grid>
          {store.characters.map((character: ICharacter) => (
            <li key={character.id}>
              <CharacterCard character={character} />
            </li>
          ))}
        </Grid>
      </section>
    </main>
  );
}

const Grid = styled.ol`
  display: grid;
  grid-gap: 16px;

  width: 100%;
  margin: 0;
  padding: 0;

  list-style: none;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
