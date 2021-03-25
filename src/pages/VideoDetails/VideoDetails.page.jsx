import React, { useRef } from 'react';
import { Link /* , useHistory */ } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import Navigation from '../../components/Navigation';
import { useAuth } from '../../providers/Auth';
import {
  StyledVideoDetailsMainContainer,
  StyledVideoDetailsLeftContainer,
  StyledVideoDetailsRightContainer,
  StyledVideoContainer,
  StyledVideo,
  StyledVideoTitle,
  StyledVideoDescription,
} from './styled';

function VideDetailsPage() {
  // const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated } = useAuth();

  return (
    <section className="homepage" ref={sectionRef}>
      {authenticated ? (
        <>
          <Navigation />
          <StyledVideoDetailsMainContainer>
            {/* Video and video information column */}
            <StyledVideoDetailsLeftContainer>
              <StyledVideoContainer>
                <StyledVideo
                  title="YuW0CE_8i1I"
                  id="ytplayer"
                  type="text/html"
                  src="https://www.youtube.com/embed/YuW0CE_8i1I?autoplay=0"
                  frameBorder="0"
                />
                <StyledVideoTitle>Título del video bien perro</StyledVideoTitle>
                <Divider />
                <StyledVideoDescription>
                  Descripción del video bien perra
                </StyledVideoDescription>
              </StyledVideoContainer>
            </StyledVideoDetailsLeftContainer>
            {/* Related videos container */}
            <StyledVideoDetailsRightContainer>
              <p>hola</p>
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
