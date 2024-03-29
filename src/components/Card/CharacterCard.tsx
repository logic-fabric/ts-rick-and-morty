import React from "react";

import styled from "styled-components";

import { EpisodeBadge } from "../Badge/EpisodeBadge";

import { ICharacter } from "../../store/actions";

type GenderElement = {
  gender: string;
};

export function CharacterCard(props: any): JSX.Element {
  const character: ICharacter = props.character;

  const episodesQty = character.episodesIds.length;

  return (
    <CharacterCardContainer id={`character-${character.id}`}>
      <AvatarContainer>
        <Avatar src={character.image} alt={character.name} loading="lazy" />
      </AvatarContainer>

      <GenderIcon gender={character.gender} title={character.gender}>
        <div
          className={`fa-solid ${
            character.gender === "female"
              ? "fa-venus"
              : character.gender === "genderless"
              ? "fa-genderless"
              : character.gender === "male"
              ? "fa-mars"
              : "fa-circle-question"
          }`}
        />
      </GenderIcon>

      {character.healthStatus === "dead" && (
        <SkullIcon title={character.healthStatus}>
          <div className="fa-solid fa-skull-crossbones" />
        </SkullIcon>
      )}

      <CharacterTitle>{character.name}</CharacterTitle>

      <p>
        <b>Gender: </b>
        {character.gender}
      </p>

      <p>
        <b>Health status: </b>
        {character.healthStatus}
      </p>

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
  position: relative;

  padding: 16px 32px;
  border-radius: 8px;

  background: white;
`;

const CharacterTitle = styled.h3`
  margin: 1.5rem 0;

  text-align: center;
`;

const EpisodesApparitions = styled.p`
  margin: 2rem 0 1rem 0;
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

const GenderIcon = styled.div<GenderElement>`
  position: absolute;
  top: 16px;
  left: calc(50% - 96px);
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;
  padding: 16px;
  border: 2px solid white;
  border-radius: 50%;

  color: white;
  font-size: 24px;

  background: 
    ${(props) =>
      props.gender === "female"
        ? "var(--danger-300)"
        : props.gender === "male"
        ? "var(--primary-500)"
        : "var(--neutral-500)"};
  );
`;

const SkullIcon = styled.div`
  position: absolute;
  top: 16px;
  left: calc(50% + 48px);
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;
  padding: 16px;
  border: 2px solid white;
  border-radius: 50%;

  color: white;
  font-size: 24px;

  background: var(--danger-700);
`;
