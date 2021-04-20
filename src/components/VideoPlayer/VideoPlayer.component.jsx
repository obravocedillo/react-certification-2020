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
  const { addToFavorites, favorites, deleteFavorites } = useAuth();
  const checkAlreadyFavorite = (currentId) => {
    let found = false;
    favorites.map((item) => {
      if (item.id === currentId) {
        found = true;
      }
      return item;
    });
    return found;
  };
  const handleDeleteFavorite = (event, currentId) => {
    event.preventDefault();
    deleteFavorites(currentId);
  };
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
        {checkAlreadyFavorite(videoId) ? (
          <StyledVideoLike onClick={(e) => handleDeleteFavorite(e, videoId)}>
            Remove favorite
          </StyledVideoLike>
        ) : (
          <StyledVideoLike
            onClick={(e) => handleAddToFavorites(e, videoId, title, description)}
          >
            Add to favorites
          </StyledVideoLike>
        )}
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
