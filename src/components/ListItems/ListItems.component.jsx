import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import videos from '../../data/youtube-videos-mock.json';

/**
 *Styled components used in all the component
 */

const StyledMainContainer = styled.div`
  margin-top: 1rem;
`;

const StyledListGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledListSingleCard = styled(Paper)`
  disfplay: flex;
  flex-direction: column;
  width: 21%;
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 2rem;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    width: 45%;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const StyledListVideoImage = styled.img`
  width: 100%;
`;

const StyledInfoContainer = styled.div`
  width: 100%;
  height: 13rem;
  overflow-hidden;
`;

const StyledListVideoTitle = styled.h2`
  width: 100%;
  font-size: 1.1rem;
  padding-left: 5%;
  padding-right: 5%;
  overflow-wrap: anywhere;
  text-align: left;
  margin-top: 0;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const StyledListVideoDescription = styled.p`
  width: 100%;
  font-size: 0.8rem;
  padding-left: 5%;
  padding-right: 5%;
  overflow-wrap: anywhere;
  text-align: left;
  color: gray;
  margin: 0;
`;

/**
 *@desc Single video element card with information of the videos
 */
function SingleElement({ title, description, thumbnails, role }) {
  return (
    <StyledListSingleCard elevation={2} variant="outlined" role={role}>
      <StyledListVideoImage src={thumbnails.medium.url} alt={title} />
      <StyledInfoContainer>
        <StyledListVideoTitle>{title}</StyledListVideoTitle>
        <StyledListVideoDescription>{description}</StyledListVideoDescription>
      </StyledInfoContainer>
    </StyledListSingleCard>
  );
}

/**
 *@desc Function that returns an array with all the available videos
 *@return Array with html elements for each video
 */
function CreateVideos() {
  // ARIA role to avoid warning and use in testing
  const videoRole = 'single-video';
  const videosArray = videos.items;
  // Array with all the video elements
  const allVideos = videosArray.map(({ id, etag, snippet }) => {
    // Check if element is channel or video
    if (id.kind !== 'youtube#channel') {
      return (
        <SingleElement
          role={videoRole}
          key={etag}
          thumbnails={snippet.thumbnails}
          title={snippet.title}
          description={snippet.description}
        />
      );
    }
    return null;
  });
  return allVideos;
}

/**
 *@desc List with all the videos, ordered using flexbox
 */
function List() {
  return (
    <StyledListGrid>
      <CreateVideos />
    </StyledListGrid>
  );
}

function ListItems() {
  return (
    <StyledMainContainer>
      <List />
    </StyledMainContainer>
  );
}

export default ListItems;
