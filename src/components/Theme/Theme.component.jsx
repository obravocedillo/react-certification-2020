import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled';
import { useMainContext } from '../../state/MainProvider';

function Theme({ children }) {
  const { state } = useMainContext();
  return (
    <ThemeProvider theme={state.theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
