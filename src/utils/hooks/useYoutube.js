import { useState, useEffect } from 'react';
import axios from 'axios';
import videosMock from '../../data/youtube-videos-mock.json';

function useYoutube(searchTerm = 'wizeline') {
  const [videos, setVideos] = useState(null);
  const [search, setSearch] = useState('wizeline');

  useEffect(() => {
    async function findVideos() {
      try {
        const startingUrlResult = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${searchTerm}&type=video&key=AIzaSyAuaWJQySwY1UL_VKl2OFCteTTaSdSCoac`
        );
        setVideos(startingUrlResult.data.items);
      } catch (error) {
        console.error('Error fetching videos: ', error);
        setVideos(
          videosMock.items
            .filter(({ id }) => {
              return id.kind !== 'youtube#channel';
            })
            .slice(0, 12)
        );
        setSearch(searchTerm);
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
      setVideos(
        videosMock.items
          .filter(({ id }) => {
            return id.kind !== 'youtube#channel';
          })
          .slice(0, 12)
      );
      setSearch(newSearchTerm);
    }
  };
  return { videos, searchNewVideo, search };
}

export default useYoutube;
