import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItems from './ListItems.component';
import videos from '../../data/youtube-videos-mock.json';

describe('ListItems Component tests', () => {
  test('count number of videos displayed according to data passed as prop', async () => {
    const mockedVideos = videos.items;
    // Half of the videos to test if prop is working, slice is usded to 13 because 1 item is the youtube channel
    const halfMockedVideos = videos.items.slice(0, 13);
    const { rerender } = render(<ListItems videos={mockedVideos} />);
    const numberPaperVideos = await screen.getAllByRole('single-video');
    expect(numberPaperVideos).toHaveLength(24);

    // Rerender and test with new props
    rerender(<ListItems videos={halfMockedVideos} />);
    const halfumberPaperVideos = await screen.getAllByRole('single-video');
    expect(halfumberPaperVideos).toHaveLength(12);
  });

  test('No videos displayed when videos array is empty', async () => {
    render(<ListItems videos={[]} />);
    const noVideosMessage = await screen.getByRole('no-videos');
    expect(noVideosMessage).toBeTruthy();
  });
});
