import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoPlayer from './VideoPlayer.component';

describe('VideoPlayer Component tests', () => {
  test('check the video player src to check if the id and title are correct', async () => {
    const image = {
      url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
    };
    render(
      <VideoPlayer
        videoId="HYyRZiwBWc8"
        title="Wizeline Guadalajara | Bringing Silicon Valley to Mexico"
        description="Wizeline Guadalajara | Bringing Silicon Valley to Mexico"
        thumbnail={image}
      />
    );
    const youtubeVideo = await screen.getByTestId('youtube-video');
    // check src of youtube video to check that the id s the same
    expect(youtubeVideo.src).toEqual(
      'https://www.youtube.com/embed/HYyRZiwBWc8?autoplay=0'
    );

    // check title of youtube video
    expect(youtubeVideo.title).toEqual(
      'Wizeline Guadalajara | Bringing Silicon Valley to Mexico'
    );
  });
});
