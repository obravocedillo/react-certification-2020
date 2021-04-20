import { renderHook } from '@testing-library/react-hooks/server';
import axios from 'axios';
import useYoutube from './useYoutube';
import { returnDataAxios } from '../../data/youtube-axios-mocked';

describe('Youtube functionality hook testing', () => {
  beforeEach(() => {
    axios.get = jest.fn();
  });
  test('Test the initial value after useFffect', async () => {
    axios.get.mockResolvedValue(returnDataAxios);
    const { result, hydrate } = renderHook(() => useYoutube());
    // hydrate component to allow useFffect to run
    hydrate();
    const videos = await result.current.searchVideos('React');
    expect(videos.length).toBe(1);
  });

  test('Test change of value after search video', async () => {
    axios.get.mockResolvedValue(returnDataAxios);
    const { result, hydrate } = renderHook(() => useYoutube('Food'));
    // Initial value must be null
    hydrate();
    // Await for new changes
    const videos = await result.current.searchVideos('React');
    console.log(videos);
    expect(videos.length).toBe(1);
  });
});
