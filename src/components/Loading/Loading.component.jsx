import React from 'react';
import styled from 'styled-components';

function LoadingMessage() {
  return <p>Cargando</p>;
}

const LoadingFullContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Loading() {
  return (
    <LoadingFullContainer>
      <LoadingMessage />
    </LoadingFullContainer>
  );
}

export default Loading;
