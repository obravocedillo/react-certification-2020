import React from 'react';
import Chip from '@material-ui/core/Chip';
import { getNotRepeatedItems } from '../../utils/fns';
import { StyledMainContainer, StyledRow } from './styled';

function clickedChip() {
  console.log('chip clicked');
}

function ChannelsRow({ videos }) {
  if (videos) {
    // ARIA role to avoid warning and use in testing
    const channel = 'chanel';
    // Get array with all channels
    const allChannels = videos.map((singleItem) => singleItem.snippet.channelTitle);
    // Get not repeated channels, form fns file
    const notRepeatedChannels = getNotRepeatedItems(allChannels);
    return (
      <StyledMainContainer>
        <StyledRow>
          {notRepeatedChannels.map((singleItem) => (
            <Chip
              label={singleItem}
              onClick={clickedChip}
              key={singleItem}
              role={channel}
            />
          ))}
        </StyledRow>
      </StyledMainContainer>
    );
  }
  return <p>No channels to show</p>;
}

export default ChannelsRow;
