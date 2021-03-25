import { useState, useEffect } from 'react';
import axios from 'axios';

function useYoutube(searchTerm = 'wizeline') {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    async function findVideos() {
      try {
        const startingUrlResult = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${searchTerm}&type=video&key=AIzaSyAuaWJQySwY1UL_VKl2OFCteTTaSdSCoac`
        );
        setVideos(startingUrlResult.data.items);
      } catch (error) {
        console.error('Error fetching videos: ', error);
      }
    }

    findVideos();
  }, [searchTerm]);

  const searchNewVideo = async (newSearchTerm) => {
    try {
      const startingUrlResult = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${newSearchTerm}&type=video&key=AIzaSyAuaWJQySwY1UL_VKl2OFCteTTaSdSCoac`
      );
      setVideos(startingUrlResult.data.items);
    } catch (error) {
      console.error('Error fetching videos: ', error);
    }
  };

  return [videos, searchNewVideo];
}

export { useYoutube };
