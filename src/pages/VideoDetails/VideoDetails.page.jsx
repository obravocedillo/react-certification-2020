import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import { getRelatedVideos } from '../../utils/fns';
import VideoPlayer from '../../components/VideoPlayer';
import RecommendedList from '../../components/RecommendedList';
import { useMainContext } from '../../state/MainProvider';
import useYoutube from '../../utils/hooks/useYoutube';
import {
  StyledVideoDetailsMainContainer,
  StyledVideoDetailsLeftContainer,
  StyledVideoDetailsRightContainer,
} from './styled';

function VideDetailsPage() {
  const { state } = useMainContext();
  const videRole = 'youtube-video-player';
  const recommendedList = 'recommended-list-component';

  const sectionRef = useRef(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { videoId } = useParams();
  const location = useLocation();
  const { searchVideos } = useYoutube();

  /**
   * Obtain related vieos from a specific id
   */
  const getCurrentRelatedVideos = useCallback(async () => {
    const currentRelatedVideos = await getRelatedVideos(videoId);
    setRelatedVideos(
      currentRelatedVideos.filter(({ id }) => {
        return id.kind !== 'youtube#channel' && id.videoId !== videoId;
      })
    );
  }, [videoId]);

  useEffect(() => {
    getCurrentRelatedVideos();
  }, [getCurrentRelatedVideos]);
  return (
    <section className="homepage" ref={sectionRef}>
      <>
        <Navigation searchVideos={searchVideos} initialInputValue={state.searchQuery} />
        <StyledVideoDetailsMainContainer>
          {/* Video and video information column */}
          <StyledVideoDetailsLeftContainer>
            <VideoPlayer
              role={videRole}
              videoId={videoId}
              title={location.state.title}
              description={location.state.description}
            />
          </StyledVideoDetailsLeftContainer>
          {/* Related videos container */}
          <StyledVideoDetailsRightContainer>
            <RecommendedList relatedVideos={relatedVideos} role={recommendedList} />
          </StyledVideoDetailsRightContainer>
        </StyledVideoDetailsMainContainer>
      </>
    </section>
  );
}

export default VideDetailsPage;
