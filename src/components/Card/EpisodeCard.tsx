import React, { useContext } from "react";

import styled from "styled-components";

import { SmallAvatar } from "../Badge/SmallAvatar";

import { StoreContext } from "../../store/store";
import { IEpisode, LIKE_EPISODE, UNLIKE_EPISODE } from "../../store/actions";

type isLikedElement = {
  isLiked: boolean;
};

export function EpisodeCard(props: any): JSX.Element {
  const episode: IEpisode = props.episode;
  const { store, dispatch } = useContext(StoreContext);

  const isLiked: boolean = store.likedEpisodes.has(episode.id);

  return (
    <EpisodeCardContainer id={`episode-${episode.id}`}>
      <EpisodeId>{episode.id}</EpisodeId>

      <EpisodeTitle>{episode.name}</EpisodeTitle>

      <LikeButton
        isLiked={isLiked}
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

      {store.characters.length === 0 ? (
        <Loader />
      ) : (
        <CharactersGrid>
          {episode.charactersIds.map((id) => (
            <SmallAvatar characterId={id} key={id} />
          ))}
        </CharactersGrid>
      )}
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
  width: calc(100% - 4rem);
  margin: 0.75rem 0;
`;

const LikeButton = styled.button<isLikedElement>`
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
  transform: ${(props) =>
    props.isLiked ? "scale(1.75) rotate(15deg)" : "none"};

  transition: all 300ms;

  &:hover {
    opacity: 0.8;
    transform: ${(props) =>
      props.isLiked ? "scale(1.75) rotate(15deg)" : "scale(1.05)"};
  }
`;

const LikeIcon = styled.div`
  color: var(--danger-700);
  font-size: 1.5rem;
`;

const Loader = styled.div`
  width: 64px;
  height: 64px;
  margin: 68px auto;
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
