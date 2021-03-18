import React from 'react';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';
import videos from '../../data/youtube-videos-mock.json';

/**
 *Styled components used in all the component
 */

const StyledMainContainer = styled.div`
  width: 95%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .MuiChip-root:not(:last-child) {
    margin-right: 2%;
  }

  @media only screen and (max-width: 900px) {
    justify-content: flex-start;
  }
`;

function clickedChip() {
  console.log('chip clicked');
}

/**
 *@desc Function that returns an array with all the available videos
 *@return Array with html elements for each video
 */
function CreateChannels() {
  const videosArray = videos.items;
  // Get array with all channels
  const allChannels = videosArray.map((singleItem) => singleItem.snippet.channelTitle);
  // Get not repeated channels
  const notRepeatedChannels = [...new Set(allChannels)];
  const channelsChips = notRepeatedChannels.map((singleItem) => {
    return <Chip label={singleItem} onClick={clickedChip} key={singleItem} />;
  });
  return channelsChips;
}

/**
 *@desc List with all the videos, ordered using flexbox
 */
function Channels() {
  return (
    <StyledRow>
      <CreateChannels onClick={clickedChip} />
    </StyledRow>
  );
}

function ChannelsRow() {
  return (
    <StyledMainContainer>
      <Channels />
    </StyledMainContainer>
  );
}

export default ChannelsRow;
