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
  const videoRole = 'recommended-video';
  const history = useHistory();
  const redirectVideoDetails = (event, id, title, description) => {
    event.preventDefault();
    history.push({
      pathname: `/video-details/${id}`,
      state: { title, description },
    });
  };
  if (relatedVideos) {
    return (
      <StyledMainContainer>
        <StyledListGrid>
          {relatedVideos.map(({ snippet, etag, id }) => (
            <StyledVideoGrid
              key={etag}
              data-testid={videoRole}
              onClick={(e) =>
                redirectVideoDetails(e, id.videoId, snippet.title, snippet.description)
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
