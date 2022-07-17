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
    if (store.characters.length === 0 || store.episodes.length === 0) {
      fetchAllCharactersAction(dispatch);
      fetchAllEpisodesAction(dispatch);
    }

    console.log({ store });
  }, [store, dispatch]);

  return (
    <>
      <AppBar>
        <h1>
          <AppTitle href="/">Rick and Morty</AppTitle>
        </h1>

        <nav>
          <MainLink href="#episodes">Episodes</MainLink>

          <MainLink href="#characters">Characters</MainLink>
        </nav>
      </AppBar>

      <main>
        <section id="episodes">
          <h2>Episodes</h2>

          <Grid>
            {store.episodes.map((episode: IEpisode) => (
              <li key={episode.id}>
                <EpisodeCard episode={episode} />
              </li>
            ))}
          </Grid>
        </section>

        <section id="characters">
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
    </>
  );
}
const AppBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;

  width: 100%;
  max-width: var(--large-container-width);
  padding: 0 1rem;

  color: white;

  background: var(--neutral-700);

  @media (min-width: 800px) {
    padding: 0 2rem;
  }
`;

const AppTitle = styled.a`
  color: white;
  font-size: var(--h6-size);
  text-decoration: none;

  @media (min-width: 800px) {
    font-size: var(--h2-size);
  }
`;

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

const MainLink = styled.a`
  margin: 0 0 0 16px;
  color: white;
  font-size: var(--sm-size);
  text-decoration: none;

  @media (min-width: 800px) {
    margin: 0 0 0 32px;

    font-size: var(--h6-size);
  }
`;
