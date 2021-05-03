import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import { getRelatedVideos } from '../../utils/fns';
import VideoPlayer from '../../components/VideoPlayer';
import RecommendedList from '../../components/RecommendedList';
import RecommendedFavorites from '../../components/RecommendedFavorites';
import { useAuth } from '../../providers/Auth';
import {
  StyledVideoDetailsMainContainer,
  StyledVideoDetailsLeftContainer,
  StyledVideoDetailsRightContainer,
} from './styled';

function VideDetailsPage() {
  const videTestId = 'youtube-video-player';
  const recommendedList = 'recommended-list-component';

  const sectionRef = useRef(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { videoId } = useParams();
  const location = useLocation();
  const { favorites } = useAuth();

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
    if (location.state.favorites) {
      setRelatedVideos(
        favorites.filter((item) => {
          return item.id !== videoId;
        })
      );
    } else {
      getCurrentRelatedVideos();
    }
  }, [favorites, getCurrentRelatedVideos, location.state.favorites, videoId]);
  return (
    <section className="homepage" ref={sectionRef}>
      <Navigation />
      <StyledVideoDetailsMainContainer>
        {/* Video and video information column */}
        <StyledVideoDetailsLeftContainer>
          <VideoPlayer
            data-testid={videTestId}
            videoId={videoId}
            title={location.state.title}
            description={location.state.description}
            thumbnail={location.state.image}
          />
        </StyledVideoDetailsLeftContainer>
        {/* Related videos container */}
        <StyledVideoDetailsRightContainer>
          {location.state.favorites ? (
            <RecommendedFavorites
              relatedVideos={relatedVideos}
              data-testid={recommendedList}
            />
          ) : (
            <RecommendedList
              relatedVideos={relatedVideos}
              data-testid={recommendedList}
            />
          )}
        </StyledVideoDetailsRightContainer>
      </StyledVideoDetailsMainContainer>
    </section>
  );
}

export default VideDetailsPage;
