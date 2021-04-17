import React from 'react';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import { useAuth } from '../../providers/Auth';

import {
  StyledVideoContainer,
  StyledVideo,
  StyledVideoTitle,
  StyledVideoDescription,
  StyledVideoTitleContainer,
  StyledVideoLike,
} from './styled';

function VideoPlayer({ videoId, title, description, thumbnail }) {
  const videRole = 'youtube-video';
  const { addToFavorites } = useAuth();
  const handleAddToFavorites = (event, id, videoTitle, videoDescription) => {
    event.preventDefault();
    const newFavorite = {
      id,
      videoTitle,
      videoDescription,
      thumbnail,
    };
    addToFavorites(newFavorite);
  };
  return (
    <StyledVideoContainer>
      <StyledVideo
        data-testid={videRole}
        title={title}
        id="ytplayer"
        type="text/html"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
        frameBorder="0"
      />
      <StyledVideoTitleContainer>
        <StyledVideoTitle>{title}</StyledVideoTitle>
        <StyledVideoLike
          onClick={(e) => handleAddToFavorites(e, videoId, title, description)}
        >
          Add to favorites
        </StyledVideoLike>
      </StyledVideoTitleContainer>
      <Divider />
      <StyledVideoDescription>{description}</StyledVideoDescription>
    </StyledVideoContainer>
  );
}

VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default VideoPlayer;
