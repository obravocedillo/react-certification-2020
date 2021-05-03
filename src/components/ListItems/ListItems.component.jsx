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
  const videoTestId = 'single-video';
  const noVideosTestId = 'no-videos';
  const history = useHistory();
  const redirectVideoDetails = (id, title, description, image) => {
    history.push({
      pathname: `/video-details/${id}`,
      state: { title, description, image },
    });
  };
  if (!videos || videos.length === 0) {
    return <p data-testid={noVideosTestId}>No videos to show</p>;
  }
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
                data-testid={videoTestId}
                key={etag}
                onClick={() =>
                  redirectVideoDetails(
                    id.videoId,
                    snippet.title,
                    snippet.description,
                    snippet.thumbnails.medium
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

ListItems.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};

export default ListItems;
