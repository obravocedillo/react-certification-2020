import axios from 'axios';
import videosMock from '../data/youtube-videos-mock.json';

function random(limit) {
  return Math.floor(Math.random() * limit);
}

function getNotRepeatedItems(array) {
  return [...new Set(array)];
}

async function getRelatedVideos(videId) {
  try {
    if (videId !== null && videId !== undefined) {
      const startingUrlResult = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&relatedToVideoId=${videId}&type=video&key=${process.env.REACT_APP_YOUTUBE_KEY}`
      );
      return startingUrlResult.data.items;
    }
    return [];
  } catch (error) {
    return videosMock.items
      .filter(({ id }) => {
        return id.kind !== 'youtube#channel';
      })
      .splice(0, 12);
  }
}

export { random, getNotRepeatedItems, getRelatedVideos };
