import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StyledMainContainer,
  StyledListGrid,
  StyledListSingleCard,
  StyledListVideoImage,
  StyledInfoContainer,
  StyledListVideoTitle,
  StyledListVideoDescription,
} from './styled';

function ListItems({ videos }) {
  // ARIA role to avoid warning and use in testing
  const videoRole = 'single-video';
  const noVideosRole = 'no-videos';
  const history = useHistory();
  const redirectVideoDetails = (event, id, title, description) => {
    event.preventDefault();
    history.push({
      pathname: `/video-details/${id}`,
      state: { title, description },
    });
  };
  if (videos && videos.length > 0) {
    return (
      <StyledMainContainer>
        <StyledListGrid>
          {videos.map(({ id, etag, snippet }) => {
            // Check if element is channel or video
            if (id.kind !== 'youtube#channel') {
              return (
                <StyledListSingleCard
                  elevation={2}
                  variant="outlined"
                  data-testid={videoRole}
                  key={etag}
                  onClick={(e) =>
                    redirectVideoDetails(
                      e,
                      id.videoId,
                      snippet.title,
                      snippet.description
                    )
                  }
                >
                  <StyledListVideoImage
                    src={snippet.thumbnails.medium.url}
                    alt={snippet.title}
                  />
                  <StyledInfoContainer>
                    <StyledListVideoTitle>{snippet.title}</StyledListVideoTitle>
                    <StyledListVideoDescription>
                      {snippet.description}
                    </StyledListVideoDescription>
                  </StyledInfoContainer>
                </StyledListSingleCard>
              );
            }
            return null;
          })}
        </StyledListGrid>
      </StyledMainContainer>
    );
  }
  return <p data-testid={noVideosRole}>No videos to show</p>;
}

ListItems.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};

export default ListItems;
