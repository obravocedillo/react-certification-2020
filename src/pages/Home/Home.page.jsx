import React, { useRef } from 'react';
import Navigation from '../../components/Navigation';
import ListItems from '../../components/ListItems';
import ChannelsRow from '../../components/ChannelsRow';
import useYoutube from '../../utils/hooks/useYoutube';
import { useMainContext } from '../../state/MainProvider';
import { StyledHomePage, StyledHomePageDivider } from './styled';

function HomePage() {
  const { state } = useMainContext();
  const sectionRef = useRef(null);
  const { searchVideos } = useYoutube();

  return (
    <StyledHomePage ref={sectionRef}>
      <>
        <Navigation searchVideos={searchVideos} initialInputValue={state.searchQuery} />
        <ChannelsRow videos={state.videos} />
        <StyledHomePageDivider />
        <ListItems
          videos={state.videos.filter(({ id }) => {
            return id.kind !== 'youtube#channel';
          })}
        />
      </>
    </StyledHomePage>
  );
}

export default HomePage;
