import React from 'react';
import styled from 'styled-components';

const StyledFullContainer = styled.main`
  width: 100%;
  height: 100%;
`;

function Layout({ children }) {
  return <StyledFullContainer>{children}</StyledFullContainer>;
}

export default Layout;
