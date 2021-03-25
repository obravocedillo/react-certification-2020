import React from 'react';
import { StyledFullContainer } from './styled';

function Layout({ children }) {
  return <StyledFullContainer>{children}</StyledFullContainer>;
}

export default Layout;
