import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import ListItems from '../../components/ListItems';
import ChannelsRow from '../../components/ChannelsRow';
import useYoutube from '../../utils/hooks/useYoutube';
import { useMainContext } from '../../state/MainProvider';
import { useAuth } from '../../providers/Auth';
import { StyledHomePage, StyledHomePageDivider } from './styled';

function HomePage() {
  const { state } = useMainContext();
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const { searchVideos } = useYoutube();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <StyledHomePage ref={sectionRef}>
      {authenticated ? (
        <>
          <Navigation searchVideos={searchVideos} initialInputValue={state.searchQuery} />
          <ChannelsRow videos={state.videos} />
          <StyledHomePageDivider />
          <ListItems
            videos={state.videos.filter(({ id }) => {
              return id.kind !== 'youtube#channel';
            })}
          />
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </StyledHomePage>
  );
}

export default HomePage;
