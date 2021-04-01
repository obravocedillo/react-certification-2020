import React from 'react';
import { render, screen } from '@testing-library/react';
import ChannelsRow from './ChannelsRow.component';
import videos from '../../data/youtube-videos-mock.json';

describe('ChannelsRow Component tests', () => {
  test('count number of chips displayed according to mock data, passed by props', async () => {
    const mockedVideos = videos.items;
    render(<ChannelsRow videos={mockedVideos} />);
    const numberChips = await screen.getAllByRole('chanel');
    expect(numberChips).toHaveLength(5);
  });
});
