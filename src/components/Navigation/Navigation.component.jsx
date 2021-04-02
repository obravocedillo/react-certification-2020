import React from 'react';
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
} from './styled';

function Navigation({ searchNewVideo, searchInput, showSearch }) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState(searchInput);

  const searchInputHandler = (event) => {
    event.preventDefault();
    setSearch(event.target.value.toLowerCase());
  };

  const handleSearchClick = (event) => {
    event.preventDefault();
    searchNewVideo(search);
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
          role={drawerRole}
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
    <div className="navigation-main-continer">
      <AppBar position="static">
        <Toolbar>
          {/* Drawer opener */}
          <LeftContainerNavigation>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              role={draweOpener}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </LeftContainerNavigation>
          {/* Search input container */}

          {showSearch ? (
            <CenterContainerNavigation>
              <StyledInputBase
                role={searchRole}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={search}
                onChange={(e) => searchInputHandler(e)}
              />
              <div>
                <StyledIconButton size="medium" onClick={(e) => handleSearchClick(e)}>
                  <StyledIconSearchIcon />
                </StyledIconButton>
              </div>
            </CenterContainerNavigation>
          ) : (
            <CenterContainerNavigation />
          )}
          {/* Icons buttons container */}
          <RightContainerNavigation>
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
    </div>
  );
}

Navigation.propTypes = {
  searchNewVideo: PropTypes.func,
  searchInput: PropTypes.string,
  showSearch: PropTypes.bool,
};

Navigation.defaultProps = {
  searchNewVideo: null,
  searchInput: '',
  showSearch: false,
};

export default Navigation;
