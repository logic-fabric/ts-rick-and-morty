import React, { useContext } from "react";

import styled from "styled-components";

import { StoreContext } from "../../store/store";
import { ICharacter } from "../../store/actions";

export function SmallAvatar(props: any): JSX.Element {
  const { id } = props;

  const { store } = useContext(StoreContext);

  const character: ICharacter = store.characters.find(
    (character: ICharacter) => character.id === id
  );

  return (
    character && (
      <SmallAvatarContainer
        href={`#character-${id}`}
        title={character.name}
        key={id}
      >
        <Avatar src={character.image} alt={character.name} />
      </SmallAvatarContainer>
    )
  );
}

const Avatar = styled.img`
  width: 100%;
  object-fit: cover;
`;

const SmallAvatarContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;

  text-align: center;

  background: var(--neutral-100);
`;
