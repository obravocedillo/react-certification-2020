import React from 'react';
import { renderHook } from '@testing-library/react-hooks/server';
import useYoutube from './useYoutube';
import MainProvider from '../../state/MainProvider';

describe('Youtube functionality hook testing', () => {
  test('Test the initial value after useFffect', async () => {
    const wrapper = ({ children }) => <MainProvider>{children}</MainProvider>;
    const { result, hydrate } = renderHook(() => useYoutube(), {
      wrapper,
    });
    // hydrate component to allow useFffect to run
    hydrate();
    expect(result.current.state.videos.length).toBe(12);
  });

  test('Test change of value after search video', async () => {
    const wrapper = ({ children }) => <MainProvider>{children}</MainProvider>;
    const { result, hydrate } = renderHook(() => useYoutube('Food'), {
      wrapper,
    });
    // Initial value must be null
    expect(result.current.state.videos.length).toBe(0);
    hydrate();
    // Check if food was used as the initial value of searchTerm
    expect(result.current.state.searchQuery).toBe('Food');
    await result.current.searchVideos('React');
    // After search array should contain 12 items
    expect(result.current.state.videos.length).toBe(12);
    // Check if searchQuery changes after new search
    expect(result.current.state.searchQuery).toBe('React');
  });
});
