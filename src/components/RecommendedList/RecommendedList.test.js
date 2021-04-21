import React from 'react';
import { render, screen } from '@testing-library/react';
import RecommendedList from './RecommendedList.component';
import videos from '../../data/youtube-videos-mock.json';

describe('RecommendedList Component tests', () => {
  test('count the number of recommended video displayed passing array in props', async () => {
    const mockedVideos = videos.items.filter(({ id }) => {
      return id.kind !== 'youtube#channel';
    });
    render(<RecommendedList relatedVideos={mockedVideos} />);
    const numberRecommendedVideos = await screen.getAllByTestId('recommended-video');
    expect(numberRecommendedVideos).toHaveLength(24);
  });
});
