import { useEffect } from 'react';
import axios from 'axios';
import videosMock from '../../data/youtube-videos-mock.json';
import { useMainContext } from '../../state/MainProvider';

function useYoutube(searchTerm = 'wizeline') {
  const { dispatch } = useMainContext();

  async function searchVideos(newSearch) {
    try {
      const startingUrlResult = await axios.get`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${newSearch}&type=video&key=AIzaSyAuaWJQySwY1UL_VKl2OFCteTTaSdSCoac`();
      dispatch({
        type: 'CHANGE_VIDEOS',
        payload: startingUrlResult.data.items,
      });
      dispatch({
        type: 'CHANGE_SEARCH',
        payload: searchTerm,
      });
    } catch (error) {
      dispatch({
        type: 'CHANGE_VIDEOS',
        payload: videosMock.items
          .filter(({ id }) => {
            return id.kind !== 'youtube#channel';
          })
          .slice(0, 12),
      });
      dispatch({
        type: 'CHANGE_SEARCH',
        payload: searchTerm,
      });
    }
  }

  useEffect(() => {
    searchVideos(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return { searchVideos };
}

export default useYoutube;
