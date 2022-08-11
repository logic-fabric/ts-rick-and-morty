import React from "react";

import styled from "styled-components";

import { SmallAvatar } from "../Badge/SmallAvatar";

import { IEpisode } from "../../store/actions";

export function EpisodeCard(props: any): JSX.Element {
  const episode: IEpisode = props.episode;

  return (
    <EpisodeCardContainer id={`episode-${episode.id}`}>
      <EpisodeId>{episode.id}</EpisodeId>

      <EpisodeTitle>{episode.name}</EpisodeTitle>

      <EpisodeSeasonAndNumber>
        {`Season ${episode.season} - Episode ${episode.number}`}
      </EpisodeSeasonAndNumber>

      <EpisodeAirDate>{`Air date: ${episode.airDate}`}</EpisodeAirDate>

      <div>
        <CharactersAppearing>
          {`${episode.charactersIds.length} characters appearing:`}
        </CharactersAppearing>

        <CharactersGrid>
          {episode.charactersIds.map((id) => (
            <SmallAvatar characterId={id} key={id} />
          ))}
        </CharactersGrid>
      </div>
    </EpisodeCardContainer>
  );
}

const CharactersAppearing = styled.p`
  margin: 1.5rem 0;

  font-weight: 700;
`;

const CharactersGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;

  width: 100%;
  max-height: 160px;
  margin: 0 0 1rem 0;
  padding: 0;
  overflow: auto;

  list-style: none;
`;

const EpisodeAirDate = styled.p`
  margin: 0.5rem 0;

  font-size: var(--xs-size);
`;

const EpisodeCardContainer = styled.article`
  position: relative;

  padding: 16px 32px;
  border-radius: 8px;

  background: white;
`;

const EpisodeId = styled.div`
  position: absolute;
  top: 16px;
  left: -24px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;

  color: white;
  font-weight: 700;
  text-decoration: none;

  background: var(--primary-700);
`;

const EpisodeSeasonAndNumber = styled.p`
  margin: 0;

  font-weight: 700;
`;

const EpisodeTitle = styled.h3`
  margin: 0.75rem 0;
`;
