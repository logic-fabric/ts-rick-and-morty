import React, { useContext } from "react";

import styled from "styled-components";

import { StoreContext } from "../../store/store";
import { IEpisode } from "../../store/actions";

export function EpisodeBadge(props: any): JSX.Element {
  const { episodeId } = props;

  const { store } = useContext(StoreContext);

  const episode: IEpisode = store.episodes.find(
    (episode: IEpisode) => episode.id === episodeId
  );

  return (
    episode && (
      <BadgeContainer href={`#episode-${episodeId}`} title={episode.name}>
        {episodeId}
      </BadgeContainer>
    )
  );
}

const BadgeContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;

  color: white;
  text-decoration: none;

  background: var(--primary-700);
`;
