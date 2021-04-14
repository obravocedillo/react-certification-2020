import React from 'react';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';

import {
  StyledVideoContainer,
  StyledVideo,
  StyledVideoTitle,
  StyledVideoDescription,
  StyledVideoTitleContainer,
  StyledVideoLike,
} from './styled';

function VideoPlayer({ videoId, title, description }) {
  const videRole = 'youtube-video';
  return (
    <StyledVideoContainer>
      <StyledVideo
        role={videRole}
        title={title}
        id="ytplayer"
        type="text/html"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
        frameBorder="0"
      />
      <StyledVideoTitleContainer>
        <StyledVideoTitle>{title}</StyledVideoTitle>
        <StyledVideoLike>Me gusta</StyledVideoLike>
      </StyledVideoTitleContainer>
      <Divider />
      <StyledVideoDescription>{description}</StyledVideoDescription>
    </StyledVideoContainer>
  );
}

VideoPlayer.propTypes = {
  videoId: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

VideoPlayer.defaultProps = {
  videoId: null,
  title: '',
  description: '',
};

export default VideoPlayer;
