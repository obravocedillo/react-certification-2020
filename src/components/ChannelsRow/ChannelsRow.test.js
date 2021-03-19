import React from 'react';
import { render, screen } from '@testing-library/react';

import ChannelsRow from './ChannelsRow.component';

test('count number of chips displayed according to mock data', async () => {
  render(<ChannelsRow />);
  const numberChips = await screen.getAllByRole('chanel');
  expect(numberChips).toHaveLength(5);
});
