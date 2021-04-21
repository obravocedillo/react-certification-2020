import React from 'react';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
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
              data-testid={channel}
            />
          ))}
        </StyledRow>
      </StyledMainContainer>
    );
  }
  return <p>No channels to show</p>;
}

ChannelsRow.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};

export default ChannelsRow;
