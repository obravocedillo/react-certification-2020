import { useEffect } from 'react';
import axios from 'axios';
import videosMock from '../../data/youtube-videos-mock.json';

function useYoutube(searchTerm = 'wizeline') {
  async function searchVideos(newSearch) {
    try {
      const startingUrlResult = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${newSearch}&type=video&key=${process.env.REACT_APP_YOUTUBE_KEY}`
      );
      return startingUrlResult.data.items;
    } catch (error) {
      return videosMock.items
        .filter(({ id }) => {
          return id.kind !== 'youtube#channel';
        })
        .slice(0, 12);
    }
  }

  useEffect(() => {
    searchVideos(searchTerm);
  }, [searchTerm]);

  // state is returned for testing purposes
  return { searchVideos };
}

export default useYoutube;
