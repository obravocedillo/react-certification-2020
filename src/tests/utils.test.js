import axios from 'axios';
import * as fn from '../utils/fns';

describe('General functions imported from fns tests', () => {
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
    axios.get = jest.fn();
    /**
     * Simulate axios http get call to obtain data from youtube API
     */
    const returnDataAxios = {
      data: {
        kind: 'youtube#searchListResponse',
        etag: 'LRviZfd_p3HDDD2uBk5Qv7zaEQU',
        nextPageToken: 'CBkQAA',
        regionCode: 'MX',
        pageInfo: {
          totalResults: 2323,
          resultsPerPage: 25,
        },
        items: [
          {
            kind: 'youtube#searchResult',
            etag: 'erqeM78PZDWIBe8qOGHGM2WdSE8',
            id: {
              kind: 'youtube#video',
              videoId: 'nmXMgqjQzls',
            },
            snippet: {
              publishedAt: '2019-09-30T23:54:32Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Video Tour | Welcome to Wizeline Guadalajara',
              description:
                'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2019-09-30T23:54:32Z',
            },
          },
        ],
      },
    };
    axios.get.mockResolvedValue(returnDataAxios);
    const youtubeVideos = await fn.getRelatedVideos('HYyRZiwBWc8');
    expect(youtubeVideos.length).toEqual(1);
    expect(youtubeVideos[0].snippet.title).toEqual(
      'Video Tour | Welcome to Wizeline Guadalajara'
    );
  });

  test('Obtain empty array when search id is undefined()', async () => {
    axios.get = jest.fn();
    /**
     * Simulate axios http get call to obtain data from youtube API
     */
    const returnDataAxios = {
      data: {
        kind: 'youtube#searchListResponse',
        etag: 'LRviZfd_p3HDDD2uBk5Qv7zaEQU',
        nextPageToken: 'CBkQAA',
        regionCode: 'MX',
        pageInfo: {
          totalResults: 2323,
          resultsPerPage: 25,
        },
        items: [
          {
            kind: 'youtube#searchResult',
            etag: 'erqeM78PZDWIBe8qOGHGM2WdSE8',
            id: {
              kind: 'youtube#video',
              videoId: 'nmXMgqjQzls',
            },
            snippet: {
              publishedAt: '2019-09-30T23:54:32Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Video Tour | Welcome to Wizeline Guadalajara',
              description:
                'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2019-09-30T23:54:32Z',
            },
          },
        ],
      },
    };
    axios.get.mockResolvedValue(returnDataAxios);
    const youtubeVideos = await fn.getRelatedVideos();
    expect(youtubeVideos.length).toEqual(0);
  });
});
