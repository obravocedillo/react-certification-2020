import React from 'react';
import { useFortune } from '../../utils/hooks/useFortune';
import { StyledFortuneSpan } from './styled';

function Fortune() {
  const { fortune } = useFortune();

  return <StyledFortuneSpan>{fortune} </StyledFortuneSpan>;
}

export default Fortune;
