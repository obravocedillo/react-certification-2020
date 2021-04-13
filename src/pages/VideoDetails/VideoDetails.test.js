import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import MainProvider from '../../state/MainProvider';
import AuthProvider from '../../providers/Auth';

import VideoDetails from './VideoDetails.page';

describe('Home Page tests', () => {
  test('check correct render of home page', async () => {
    const wrapper = ({ children }) => {
      return (
        <MainProvider>
          <AuthProvider>
            <MemoryRouter
              initialEntries={[
                {
                  pathname: '/video-details/HYyRZiwBWc8',
                  state: {
                    title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
                  },
                },
              ]}
            >
              <Route path="/video-details/:videoId">{children}</Route>
            </MemoryRouter>
          </AuthProvider>
        </MainProvider>
      );
    };
    render(<VideoDetails />, { wrapper });

    // youtube player rendered
    const youtubeVideo = await screen.getByRole('youtube-video');
    // check src of youtube video to check that the id is the same as the one passed in the route
    expect(youtubeVideo.src).toEqual(
      'https://www.youtube.com/embed/HYyRZiwBWc8?autoplay=0'
    );
  });
});
