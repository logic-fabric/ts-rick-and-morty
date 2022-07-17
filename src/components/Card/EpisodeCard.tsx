import React from "react";

import styled from "styled-components";

import { IEpisode } from "../../store/actions";

export function EpisodeCard(props: any): JSX.Element {
  const episode: IEpisode = props.episode;

  return (
    <EpisodeCardContainer>
      <EpisodeTitle>{episode.name}</EpisodeTitle>

      <EpisodeSeasonAndPosition>
        {`S${episode.season} E${episode.position}`}
      </EpisodeSeasonAndPosition>

      <EpisodeAirDate>{`Air date: ${episode.airDate}`}</EpisodeAirDate>
    </EpisodeCardContainer>
  );
}

const EpisodeAirDate = styled.p`
  margin: 0.5rem 0;

  font-size: var(--xs-size);
`;

const EpisodeCardContainer = styled.article`
  padding: 16px 32px;
  border-radius: 8px;

  background: white;
`;

const EpisodeSeasonAndPosition = styled.p`
  margin: 0;

  font-weight: 700;
`;

const EpisodeTitle = styled.h3`
  margin: 0.75rem 0;
`;
