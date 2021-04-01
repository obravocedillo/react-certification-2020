import React, { useRef, useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import { useAuth } from '../../providers/Auth';
import { getRelatedVideos } from '../../utils/fns';
import VideoPlayer from '../../components/VideoPlayer';
import RecommendedList from '../../components/RecommendedList';
import {
  StyledVideoDetailsMainContainer,
  StyledVideoDetailsLeftContainer,
  StyledVideoDetailsRightContainer,
} from './styled';

function VideDetailsPage() {
  const videRole = 'youtube-video-player';
  const recommendedList = 'recommended-list-component';

  const sectionRef = useRef(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { authenticated } = useAuth();
  const { videoId } = useParams();
  const location = useLocation();
  useEffect(() => {
    const asyncFunction = async () => {
      const currentRelayedVideos = await getRelatedVideos(videoId);
      setRelatedVideos(
        currentRelayedVideos.filter(({ id }) => {
          return id.kind !== 'youtube#channel' && id.videoId !== videoId;
        })
      );
    };
    asyncFunction();
  }, [videoId]);
  return (
    <section className="homepage" ref={sectionRef}>
      {authenticated ? (
        <>
          <Navigation />
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
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </section>
  );
}

export default VideDetailsPage;
