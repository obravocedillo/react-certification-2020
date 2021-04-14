import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Material design imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
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
} from './styled';

import { darkTheme, lightTheme, vintageTheme } from '../../themes/Themes';

function Navigation({ searchVideos, initialInputValue }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(initialInputValue);
  const { dispatch, state } = useMainContext();

  const searchInputHandler = (event) => {
    event.preventDefault();
    setSearch(event.target.value.toLowerCase());
  };

  const handleSearchClick = (event) => {
    event.preventDefault();
    searchVideos(search);
  };

  const handleSearchEnter = (event) => {
    if (event.charCode === 13) {
      event.preventDefault();
      searchVideos(search);
    }
  };

  /**
   * @desc change theme according to select option
   * @param {string} theme theme selected
   */
  const handleThemeChange = (theme) => {
    let newTheme;
    switch (theme) {
      case 'light':
        newTheme = lightTheme;
        break;
      case 'dark':
        newTheme = darkTheme;
        break;
      case 'vintage':
        newTheme = vintageTheme;
        break;
      default:
        newTheme = lightTheme;
    }
    dispatch({
      type: 'CHANGE_THEME',
      payload: newTheme,
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
          <List>
            <StyledTitleHeading>Usuario</StyledTitleHeading>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Oliver Bravo Cedillo" />
            </ListItem>
            <StyledCustomDivider />
            <StyledTitleHeading>Favoritos</StyledTitleHeading>
          </List>
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
            >
              <option value="">Theme</option>
              <option value="light">Light Mode</option>
              <option value="dark">Dark Mode</option>
              <option value="vintage">Vintage</option>
            </ThemeSelecter>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle fontSize="large" />
            </IconButton>
          </RightContainerNavigation>
          {/* Mobile icon menu container */}
        </Toolbar>
      </AppBar>
      <DrawerMenu />
    </NavigationMainContainer>
  );
}

Navigation.propTypes = {
  searchVideos: PropTypes.func.isRequired,
  initialInputValue: PropTypes.string.isRequired,
};

export default Navigation;
