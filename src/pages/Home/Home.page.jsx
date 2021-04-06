import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Navigation from '../../components/Navigation';
import ListItems from '../../components/ListItems';
import ChannelsRow from '../../components/ChannelsRow';
import useYoutube from '../../utils/hooks/useYoutube';
import { useMainContext } from '../../state/MainProvider';
import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

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
  console.log({ state });
  return (
    <section className="homepage" ref={sectionRef}>
      {authenticated ? (
        <>
          <Navigation
            searchVideos={searchVideos}
            searchInput={state.searchQuery}
            showSearch
          />
          <ChannelsRow videos={state.videos} />
          <Divider />
          <ListItems videos={state.videos} />
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
    </section>
  );
}

export default HomePage;
