import React from 'react';
import styled from 'styled-components';
import { useFortune } from '../../utils/hooks/useFortune';

const StyledFortuneSpan = styled.main`
  position: fixed;
  bottom: 0;
  right: 0;
`;

function Fortune() {
  const { fortune } = useFortune();

  return <StyledFortuneSpan>{fortune} </StyledFortuneSpan>;
}

export default Fortune;
