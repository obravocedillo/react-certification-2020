import React, { useEffect, useRef } from 'react';
import Navigation from '../../components/Navigation';
import ListItems from '../../components/ListItems';
import ChannelsRow from '../../components/ChannelsRow';
import { useMainContext } from '../../state/MainProvider';
import { StyledHomePage, StyledHomePageDivider } from './styled';
import useYoutube from '../../utils/hooks/useYoutube';

function HomePage() {
  const { state, dispatch } = useMainContext();
  const sectionRef = useRef(null);
  const { searchVideos } = useYoutube();

  useEffect(() => {
    const getVideosFromHook = async () => {
      const returnedVideos = await searchVideos('wizeline');
      dispatch({
        type: 'CHANGE_VIDEOS',
        payload: returnedVideos,
      });
      return returnedVideos;
    };
    if (state.videos.length === 0) {
      getVideosFromHook();
    }
  }, [dispatch, searchVideos, state.videos.length]);

  return (
    <StyledHomePage ref={sectionRef}>
      <Navigation />
      <ChannelsRow videos={state.videos} />
      <StyledHomePageDivider />
      <ListItems
        videos={state.videos.filter(({ id }) => {
          return id.kind !== 'youtube#channel';
        })}
      />
    </StyledHomePage>
  );
}

export default HomePage;
