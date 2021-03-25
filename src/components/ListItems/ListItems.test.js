import React from 'react';
import { render, screen } from '@testing-library/react';

import ListItems from './ListItems.component';

describe('ListItems Component tests', () => {
  test('count number of videos displayed according to mock data', async () => {
    render(<ListItems />);
    const numberChips = await screen.getAllByRole('single-video');
    expect(numberChips).toHaveLength(24);
  });
});
