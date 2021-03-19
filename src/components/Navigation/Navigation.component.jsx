import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import styled from 'styled-components';
// Material design imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

/**
 * Styled components for the page
 */
const LeftContainerNavigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 20%;
  justify-content: flex-start;
  @media only screen and (max-width: 900px) {
    width: 10%;
  }
`;

const CenterContainerNavigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60%;
  @media only screen and (max-width: 900px) {
    width: 80%;
  }
`;

const RightContainerNavigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 20%;
  justify-content: flex-end;
  @media only screen and (max-width: 900px) {
    width: 10%;
  }
`;

const StyledInputBase = styled(InputBase)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.8);
  padding-left: 1%;
  margin-left: 1%;
  width: 60%;
`;

const StyledIconButton = styled(IconButton)`
  color: rgba(255, 255, 255, 0.8);
`;

const StyledIconSearchIcon = styled(SearchIcon)`
  color: rgba(255, 255, 255, 0.8);
`;

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  .MuiDrawer-paper {
    width: 22%;
  }

  @media only screen and (max-width: 900px) {
    .MuiDrawer-paper {
      width: 60%;
    }
  }

  @media only screen and (max-width: 600px) {
    .MuiDrawer-paper {
      width: 80%;
    }
  }
`;

const StyledTitleHeading = styled.h3`
  font-size: 1.1rem;
  padding-left: 6%;
  margin-bottom: 1rem;
`;

const StyledCustomDivider = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

function Navigation() {
  const [open, setOpen] = React.useState(false);

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
   * Main navigation bar
   */
  function NavigationBar() {
    // ARIA role to avoid warning and use in testing
    const draweOpener = 'drawer-opener';
    const searchRole = 'search-bar';
    return (
      <div>
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
            <CenterContainerNavigation>
              <StyledInputBase
                role={searchRole}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
              <div>
                <StyledIconButton aria-label="delete" size="medium">
                  <StyledIconSearchIcon />
                </StyledIconButton>
              </div>
            </CenterContainerNavigation>
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

  /**
   * Return of whole navigation bar
   */
  return (
    <div className="navigation-main-continer">
      <NavigationBar />
    </div>
  );
}

export default Navigation;
