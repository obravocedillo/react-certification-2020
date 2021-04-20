import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StyledMainContainer,
  StyledListGrid,
  StyledVideoGrid,
  StyledVideoImage,
  StyledVideoName,
  StyledVideoDescription,
  StyledVideoInformation,
  StyledVideoRow,
} from './styled';

function RecommendedFavorites({ relatedVideos }) {
  const videoRole = 'recommended-video';
  const history = useHistory();
  const redirecFavoriteDetails = (event, id, title, description, image) => {
    event.preventDefault();
    history.push({
      pathname: `/video-details/${id}`,
      state: { title, description, image },
    });
  };
  if (relatedVideos) {
    return (
      <StyledMainContainer>
        <StyledListGrid>
          {relatedVideos.map(({ id, videoTitle, videoDescription, thumbnail }) => (
            <StyledVideoGrid
              key={id}
              data-testid={videoRole}
              onClick={(e) =>
                redirecFavoriteDetails(e, id, videoTitle, videoDescription, thumbnail)
              }
            >
              <StyledVideoRow>
                <StyledVideoImage src={thumbnail.url} />
                <StyledVideoInformation>
                  <StyledVideoName>{videoTitle}</StyledVideoName>
                  <StyledVideoDescription>{videoDescription}</StyledVideoDescription>
                </StyledVideoInformation>
              </StyledVideoRow>
            </StyledVideoGrid>
          ))}
        </StyledListGrid>
      </StyledMainContainer>
    );
  }
  return null;
}

RecommendedFavorites.propTypes = {
  relatedVideos: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};

RecommendedFavorites.defaultProps = {
  relatedVideos: [],
};

export default RecommendedFavorites;
