import React from 'react';
import { render, screen } from '@testing-library/react';
import RecommendedFavorites from './RecommendedFavorites.component';
import videos from '../../data/youtube-videos-mock.json';

describe('RecommendedList Component tests', () => {
  test('count the number of recommended video displayed passing array in props', async () => {
    const mockedVideos = videos.items
      .filter(({ id }) => {
        return id.kind !== 'youtube#channel';
      })
      .map((item) => {
        const formatedVideo = {
          id: item.id.videoId,
          videoTitle: item.snippet.title,
          videoDescription: item.snippet.description,
          thumbnail: item.snippet.thumbnails.medium,
        };
        return formatedVideo;
      });
    render(<RecommendedFavorites relatedVideos={mockedVideos} />);
    const numberRecommendedVideos = await screen.getAllByTestId('recommended-video');
    expect(numberRecommendedVideos).toHaveLength(24);
  });
});
