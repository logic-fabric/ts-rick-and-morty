import React from "react";

import styled from "styled-components";

import { SmallAvatar } from "../SmallAvatar/SmallAvatar";

import { IEpisode } from "../../store/actions";

export function EpisodeCard(props: any): JSX.Element {
  const episode: IEpisode = props.episode;

  return (
    <EpisodeCardContainer>
      <EpisodeTitle>{episode.name}</EpisodeTitle>

      <EpisodeSeasonAndNumber>
        {`S${episode.season} E${episode.number}`}
      </EpisodeSeasonAndNumber>

      <EpisodeAirDate>{`Air date: ${episode.airDate}`}</EpisodeAirDate>

      <div>
        <CharactersAppearing>Characters appearing:</CharactersAppearing>

        <EpisodeCharactersGrid>
          {episode.charactersIds.map((id) => (
            <SmallAvatar id={id} key={id} />
          ))}
        </EpisodeCharactersGrid>
      </div>
    </EpisodeCardContainer>
  );
}

const CharactersAppearing = styled.p`
  font-weight: 700;
`;

const EpisodeAirDate = styled.p`
  margin: 0.5rem 0;

  font-size: var(--xs-size);
`;

const EpisodeCardContainer = styled.article`
  padding: 16px 32px;
  border-radius: 8px;

  background: white;
`;

const EpisodeCharactersGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;

  width: 100%;
  max-height: 220px;
  margin: 0 0 1rem 0;
  padding: 0;
  overflow: auto;

  list-style: none;
`;

const EpisodeSeasonAndNumber = styled.p`
  margin: 0;

  font-weight: 700;
`;

const EpisodeTitle = styled.h3`
  margin: 0.75rem 0;
`;
