import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Material design imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import useYoutube from '../../utils/hooks/useYoutube';
import { useAuth } from '../../providers/Auth';
import { useMainContext } from '../../state/MainProvider';

// Styled component imports
import {
  LeftContainerNavigation,
  CenterContainerNavigation,
  RightContainerNavigation,
  StyledInputBase,
  StyledIconButton,
  StyledIconSearchIcon,
  StyledSwipeableDrawer,
  StyledTitleHeading,
  StyledCustomDivider,
  ThemeSelecter,
  NavigationMainContainer,
  StyledLoginButton,
  StyledSmallLoginButton,
  StyledFavoritesContainer,
  StyledFavoritesTitle,
  StyledFavoritesButtonContainer,
  StyledFavoritesButton,
  StyledTitleHeadingButton,
} from './styled';

function Navigation() {
  const [open, setOpen] = useState(false);
  const { dispatch, state } = useMainContext();
  const [search, setSearch] = useState(state.searchQuery);
  const { user, authenticated, favorites, deleteFavorites, logout } = useAuth();
  const history = useHistory();
  const { searchVideos } = useYoutube();

  const searchInputHandler = (event) => {
    event.preventDefault();
    setSearch(event.target.value.toLowerCase());
  };

  const handleSearchClick = async (event) => {
    event.preventDefault();
    const returnedVideos = await searchVideos(search);
    dispatch({
      type: 'CHANGE_VIDEOS',
      payload: returnedVideos,
    });
  };

  const handleSearchEnter = async (event) => {
    if (event.charCode === 13) {
      event.preventDefault();
      const returnedVideos = await searchVideos(search);
      dispatch({
        type: 'CHANGE_VIDEOS',
        payload: returnedVideos,
      });
    }
  };

  const redirectToLogin = (event) => {
    event.preventDefault();
    history.push('/login');
  };

  const redirectToHome = (event) => {
    event.preventDefault();
    history.push('/');
  };

  const handleDeleteFavorite = (event, item) => {
    event.preventDefault();
    deleteFavorites(item.id);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
  };

  const handleFavoriteClick = (event, id, title, description, image) => {
    event.preventDefault();
    history.push({
      pathname: `/favorites/${id}`,
      state: {
        favorites: true,
        title,
        description,
        image,
      },
    });
  };

  /**
   * @desc change theme according to select option
   * @param {string} theme theme selected
   */
  const handleThemeChange = (theme) => {
    dispatch({
      type: 'CHANGE_THEME',
      payload: theme,
    });
  };

  /**
   * @desc Opens and closes the left drawer
   * @param {boolean} openValue - New drawer state
   */
  const toggleDrawer = (openValue) => () => {
    setOpen(openValue);
  };

  /**
   * Drawer on the left
   */
  function DrawerMenu() {
    // ARIA role to avoid warning and use in testing
    const drawerRole = 'drawer-element';
    return (
      <React.Fragment key="left-drawr">
        <StyledSwipeableDrawer
          data-testid={drawerRole}
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {authenticated ? (
            <List>
              <StyledTitleHeadingButton onClick={(e) => redirectToHome(e)}>
                Home
              </StyledTitleHeadingButton>
              <StyledCustomDivider />
              <StyledTitleHeading>User</StyledTitleHeading>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.name} />
              </ListItem>
              <StyledCustomDivider />
              <StyledTitleHeading>Favorites</StyledTitleHeading>
              {favorites.map((item) => {
                return (
                  <div key={item.id}>
                    <StyledFavoritesContainer key={item.id}>
                      <StyledFavoritesTitle
                        onClick={(e) =>
                          handleFavoriteClick(
                            e,
                            item.id,
                            item.videoTitle,
                            item.videoDescription,
                            item.thumbnail
                          )
                        }
                      >
                        {item.videoTitle}
                      </StyledFavoritesTitle>
                      <StyledFavoritesButtonContainer>
                        <StyledFavoritesButton
                          onClick={(e) => handleDeleteFavorite(e, item)}
                        >
                          Delete favorite
                        </StyledFavoritesButton>
                      </StyledFavoritesButtonContainer>
                    </StyledFavoritesContainer>
                    <StyledCustomDivider />
                  </div>
                );
              })}
            </List>
          ) : (
            <List>
              <StyledTitleHeadingButton onClick={(e) => redirectToHome(e)}>
                Home
              </StyledTitleHeadingButton>
              <StyledCustomDivider />
              <StyledTitleHeading>Favorites</StyledTitleHeading>
              <StyledLoginButton onClick={(e) => redirectToLogin(e)}>
                Login
              </StyledLoginButton>
              <StyledCustomDivider />
            </List>
          )}
        </StyledSwipeableDrawer>
      </React.Fragment>
    );
  }

  /**
   * Return of whole navigation bar
   */
  const draweOpener = 'drawer-opener';
  const searchRole = 'search-bar';
  return (
    <NavigationMainContainer>
      <AppBar position="static">
        <Toolbar>
          {/* Drawer opener */}
          <LeftContainerNavigation>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              data-testid={draweOpener}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </LeftContainerNavigation>
          {/* Search input container */}
          <CenterContainerNavigation>
            <StyledInputBase
              data-testid={searchRole}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onKeyPress={(e) => handleSearchEnter(e)}
              onChange={(e) => searchInputHandler(e)}
            />
            <div>
              <StyledIconButton size="medium" onClick={(e) => handleSearchClick(e)}>
                <StyledIconSearchIcon />
              </StyledIconButton>
            </div>
          </CenterContainerNavigation>
          {/* Icons buttons container */}
          <RightContainerNavigation>
            <ThemeSelecter
              onChange={(e) => handleThemeChange(e.target.value)}
              value={state.theme.name}
              data-testid="theme select"
            >
              <option value="">Theme</option>
              <option value="light">Light Mode</option>
              <option value="dark">Dark Mode</option>
              <option value="vintage">Vintage</option>
            </ThemeSelecter>
            {authenticated ? (
              <StyledSmallLoginButton onClick={(e) => handleLogout(e)}>
                Logout
              </StyledSmallLoginButton>
            ) : (
              <StyledSmallLoginButton
                onClick={(e) => redirectToLogin(e)}
                data-testid="login button"
              >
                Login
              </StyledSmallLoginButton>
            )}
          </RightContainerNavigation>
          {/* Mobile icon menu container */}
        </Toolbar>
      </AppBar>
      <DrawerMenu />
    </NavigationMainContainer>
  );
}
export default Navigation;
