import React from "react";

import styled from "styled-components";

import { ICharacter } from "../../store/actions";

export function CharacterCard(props: any): JSX.Element {
  const character: ICharacter = props.character;

  return (
    <CharacterCardContainer id={`character-${character.id}`}>
      <AvatarContainer>
        <Avatar src={character.image} alt={character.name} />
      </AvatarContainer>

      <CharacterTitle>{character.name}</CharacterTitle>
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
