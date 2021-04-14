import React from 'react';
import { renderHook } from '@testing-library/react-hooks/server';
import axios from 'axios';
import useYoutube from './useYoutube';
import MainProvider from '../../state/MainProvider';
import { returnDataAxios } from '../../data/youtube-axios-mocked';

describe('Youtube functionality hook testing', () => {
  beforeEach(() => {
    axios.get = jest.fn();
  });
  test('Test the initial value after useFffect', async () => {
    axios.get.mockResolvedValue(returnDataAxios);
    const wrapper = ({ children }) => <MainProvider>{children}</MainProvider>;
    const { result, hydrate, waitForValueToChange } = renderHook(() => useYoutube(), {
      wrapper,
    });
    // hydrate component to allow useFffect to run
    hydrate();
    await waitForValueToChange(() => result.current.state);
    expect(result.current.state.videos.length).toBe(1);
  });

  test('Test change of value after search video', async () => {
    axios.get.mockResolvedValue(returnDataAxios);
    const wrapper = ({ children }) => <MainProvider>{children}</MainProvider>;
    const { result, hydrate, waitForValueToChange } = renderHook(
      () => useYoutube('Food'),
      {
        wrapper,
      }
    );
    // Initial value must be null
    expect(result.current.state.videos.length).toBe(0);
    hydrate();
    // Await for new changes
    await waitForValueToChange(() => result.current.state);
    // Check if food was used as the initial value of searchTerm
    expect(result.current.state.searchQuery).toBe('Food');
    await result.current.searchVideos('React');
    // After search array should contain 12 items
    expect(result.current.state.videos.length).toBe(1);
    // Check if searchQuery changes after new search
    expect(result.current.state.searchQuery).toBe('React');
  });
});
