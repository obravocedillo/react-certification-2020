import React from 'react';
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
  if (videos) {
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
                  role={videoRole}
                  key={etag}
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
  return <p>No videos to show</p>;
}

export default ListItems;
