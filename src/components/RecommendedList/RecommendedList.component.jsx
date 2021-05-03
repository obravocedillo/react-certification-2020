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

function RecommendedList({ relatedVideos }) {
  const videoTestId = 'recommended-video';
  const history = useHistory();
  const redirectVideoDetails = (id, title, description, image) => {
    history.push({
      pathname: `/video-details/${id}`,
      state: { title, description, image },
    });
  };
  if (relatedVideos) {
    return (
      <StyledMainContainer>
        <StyledListGrid>
          {relatedVideos.map(({ snippet, etag, id }) => (
            <StyledVideoGrid
              key={etag}
              data-testid={videoTestId}
              onClick={() =>
                redirectVideoDetails(
                  id.videoId,
                  snippet.title,
                  snippet.description,
                  snippet.thumbnails.medium
                )
              }
            >
              {snippet && (
                <StyledVideoRow>
                  <StyledVideoImage src={snippet.thumbnails.medium.url} />
                  <StyledVideoInformation>
                    <StyledVideoName>{snippet.title}</StyledVideoName>
                    <StyledVideoDescription>{snippet.description}</StyledVideoDescription>
                  </StyledVideoInformation>
                </StyledVideoRow>
              )}
            </StyledVideoGrid>
          ))}
        </StyledListGrid>
      </StyledMainContainer>
    );
  }
  return null;
}

RecommendedList.propTypes = {
  relatedVideos: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};

RecommendedList.defaultProps = {
  relatedVideos: [],
};

export default RecommendedList;
