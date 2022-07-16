import React, { useContext, useEffect } from "react";

import styled from "styled-components";

import { EpisodeCard } from "../../components/Card/EpisodeCard";

import { StoreContext } from "../../store/store";
import { fetchAllEpisodesAction } from "../../store/actions";

export function HomePage(): JSX.Element {
  const { store, dispatch } = useContext(StoreContext);

  useEffect(() => {
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

        <EpisodesGrid>
          {store.episodes.map((episode: any) => (
            <EpisodeCard episode={episode} key={episode.id} />
          ))}
        </EpisodesGrid>
      </section>
    </main>
  );
}

const EpisodesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;

  width: 100%;
`;
