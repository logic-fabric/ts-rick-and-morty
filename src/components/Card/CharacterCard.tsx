import React from "react";

import styled from "styled-components";

import { EpisodeBadge } from "../Badge/EpisodeBadge";

import { ICharacter } from "../../store/actions";

export function CharacterCard(props: any): JSX.Element {
  const character: ICharacter = props.character;

  const episodesQty = character.episodesIds.length;

  return (
    <CharacterCardContainer id={`character-${character.id}`}>
      <AvatarContainer>
        <Avatar src={character.image} alt={character.name} />
      </AvatarContainer>

      <CharacterTitle>{character.name}</CharacterTitle>

      <div>
        <EpisodesApparitions>
          {`This character appears in ${
            episodesQty === 1 ? "only one" : episodesQty
          } episode${episodesQty === 1 ? "" : "s"}:`}
        </EpisodesApparitions>

        <EpisodesGrid>
          {character.episodesIds.map((id) => (
            <EpisodeBadge episodeId={id} key={id} />
          ))}
        </EpisodesGrid>
      </div>
    </CharacterCardContainer>
  );
}

const Avatar = styled.img`
  width: 100%;
  object-fit: cover;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;

  width: 160px;
  height: 160px;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;

  text-align: center;

  background: var(--neutral-100);
`;

const CharacterCardContainer = styled.article`
  padding: 16px 32px;
  border-radius: 8px;

  background: white;
`;

const CharacterTitle = styled.h3`
  margin: 1.5rem 0 0.75rem 0;

  text-align: center;
`;

const EpisodesApparitions = styled.p`
  font-weight: 700;
`;

const EpisodesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 8px;

  width: 100%;
  max-height: 72px;
  margin: 0 0 1rem 0;
  padding: 0;
  overflow: auto;

  list-style: none;
`;
