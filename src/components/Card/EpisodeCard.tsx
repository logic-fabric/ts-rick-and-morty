import React, { useContext } from "react";

import styled from "styled-components";

import { SmallAvatar } from "../Badge/SmallAvatar";

import { StoreContext } from "../../store/store";
import { IEpisode, LIKE_EPISODE, UNLIKE_EPISODE } from "../../store/actions";

export function EpisodeCard(props: any): JSX.Element {
  const episode: IEpisode = props.episode;
  const { store, dispatch } = useContext(StoreContext);

  const isLiked: Boolean = store.likedEpisodes.has(episode.id);

  return (
    <EpisodeCardContainer id={`episode-${episode.id}`}>
      <EpisodeId>{episode.id}</EpisodeId>

      <EpisodeTitle>{episode.name}</EpisodeTitle>

      <LikeButton
        onClick={() => {
          if (isLiked) {
            dispatch({
              type: UNLIKE_EPISODE,
              payload: { id: episode.id },
            });
          } else {
            dispatch({
              type: LIKE_EPISODE,
              payload: { id: episode.id },
            });
          }
        }}
      >
        <LikeIcon
          className={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}
        />
      </LikeButton>

      <EpisodeSeasonAndNumber>
        {`Season ${episode.season} - Episode ${episode.number}`}
      </EpisodeSeasonAndNumber>

      <EpisodeAirDate>{`Air date: ${episode.airDate}`}</EpisodeAirDate>

      <CharactersAppearing>
        {`${episode.charactersIds.length} characters appearing:`}
      </CharactersAppearing>

      <CharactersGrid>
        {episode.charactersIds.map((id) => (
          <SmallAvatar characterId={id} key={id} />
        ))}
      </CharactersGrid>
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
  top: 1rem;
  left: -1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;
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

const LikeButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;

  background: var(--danger-100);
  opacity: 0.6;

  cursor: pointer;

  transition: all 300ms;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

const LikeIcon = styled.div`
  color: var(--danger-700);
  font-size: 1.5rem;
`;
