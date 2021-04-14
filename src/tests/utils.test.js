import axios from 'axios';
import * as fn from '../utils/fns';
import { returnDataAxios } from '../data/youtube-axios-mocked';

describe('General functions imported from fns tests', () => {
  beforeEach(() => {
    axios.get = jest.fn();
  });

  test('checks getNotRepeatedItems result, should return an array with no repeated values', () => {
    const testArrayOne = [1, 2, 2, 1, 5, 6, 3, 1];
    const testArrayTwo = [
      'wizeline',
      'react',
      'movies',
      'react',
      'food',
      'react',
      'travel',
      'wizeline',
    ];
    const result1 = fn.getNotRepeatedItems(testArrayOne);
    const result2 = fn.getNotRepeatedItems(testArrayTwo);
    expect(result1).toEqual([1, 2, 5, 6, 3]);
    expect(result2).toEqual(['wizeline', 'react', 'movies', 'food', 'travel']);
  });

  test('Obtain and test axios call and getRelatedVideos()', async () => {
    /**
     * Simulate axios http get call to obtain data from youtube API
     */
    axios.get.mockResolvedValue(returnDataAxios);
    const youtubeVideos = await fn.getRelatedVideos('HYyRZiwBWc8');
    expect(youtubeVideos.length).toEqual(1);
    expect(youtubeVideos[0].snippet.title).toEqual(
      'Video Tour | Welcome to Wizeline Guadalajara'
    );
  });

  test('Obtain empty array when search id is undefined()', async () => {
    /**
     * Simulate axios http get call to obtain data from youtube API
     */
    axios.get.mockResolvedValue(returnDataAxios);
    const youtubeVideos = await fn.getRelatedVideos();
    expect(youtubeVideos.length).toEqual(0);
  });
});
