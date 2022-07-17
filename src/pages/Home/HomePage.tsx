import React, { useContext, useEffect, useState } from "react";

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (store.characters.length === 0 || store.episodes.length === 0) {
      fetchAllCharactersAction(dispatch);
      fetchAllEpisodesAction(dispatch);

      setIsLoading(false);
    }

    console.log({ store });
  }, [store, dispatch]);

  return (
    <>
      <AppBar>
        <AppTitle onClick={() => window.scrollTo(0, 0)}>
          Rick and Morty
        </AppTitle>

        <nav>
          <MainLink href="#episodes">Episodes</MainLink>

          <MainLink href="#characters">Characters</MainLink>
        </nav>
      </AppBar>

      <main>
        <section id="episodes">
          <h2>{`${store.episodes.length} episodes}`}</h2>

          {isLoading ? (
            <Loader />
          ) : (
            <Grid>
              {store.episodes.map((episode: IEpisode) => (
                <li key={episode.id}>
                  <EpisodeCard episode={episode} />
                </li>
              ))}
            </Grid>
          )}
        </section>

        <section id="characters">
          <h2>{`${store.characters.length} characters`}</h2>

          {isLoading ? (
            <Loader />
          ) : (
            <Grid>
              {store.characters.map((character: ICharacter) => (
                <li key={character.id}>
                  <CharacterCard character={character} />
                </li>
              ))}
            </Grid>
          )}
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

  background: var(--neutral-900);
  opacity: 0.7;
  cursor: pointer;

  @media (min-width: 800px) {
    padding: 0 2rem;
  }
`;

const AppTitle = styled.h1`
  color: white;
  font-size: var(--h6-size);

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

const Loader = styled.div`
  width: 64px;
  height: 64px;
  margin: auto;
  border: 8px solid var(--primary-500);
  border-left-color: transparent;
  border-radius: 50%;

  animation: 500ms linear infinite full-rotation;

  @keyframes full-rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
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
