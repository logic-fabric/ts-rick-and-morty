import React from "react";

import styled from "styled-components";

export function EpisodeCard(props: any): JSX.Element {
  const { episode } = props;

  return (
    <CardContainer>
      <h3>{episode.name}</h3>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  padding: 32px;
  border-radius: 8px;

  background: white;
`;
