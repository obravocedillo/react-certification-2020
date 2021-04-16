import styled from 'styled-components';

// Material design imports
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

/**
 * Styled components for the page
 */
export const NavigationMainContainer = styled.div`
  .MuiAppBar-colorPrimary {
    color: ${(props) => props.theme.navigationColor};
    background-color: ${(props) => props.theme.navigationBackground};
  }
`;

export const LeftContainerNavigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 20%;
  justify-content: flex-start;
  @media only screen and (max-width: 900px) {
    width: 10%;
  }
`;

export const CenterContainerNavigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60%;
  @media only screen and (max-width: 900px) {
    width: 80%;
  }
`;

export const RightContainerNavigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 20%;
  justify-content: flex-end;
  @media only screen and (max-width: 900px) {
    width: 10%;
  }
`;

export const StyledInputBase = styled(InputBase)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.8);
  padding-left: 1%;
  margin-left: 1%;
  width: 60%;
  border-radius: 5px;
`;

export const StyledIconButton = styled(IconButton)`
  color: rgba(255, 255, 255, 0.8);
`;

export const StyledIconSearchIcon = styled(SearchIcon)`
  color: rgba(255, 255, 255, 0.8);
`;

export const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  .MuiDrawer-paper {
    width: 22%;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
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

export const StyledTitleHeading = styled.h3`
  font-size: 1.1rem;
  padding-left: 6%;
  margin-bottom: 1rem;
`;

export const StyledCustomDivider = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-top: 1px solid ${(props) => props.theme.divider};
`;

export const ThemeSelecter = styled.select`
  width: 70%;
  margin-right: 5%;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  border-radius: 5px;
  font-size: 0.9rem;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const StyledLoginButton = styled.button`
  width: 86%;
  margin-left: 7%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 5px;
  border: none;
  background: ${(props) => props.theme.navigationBackground};
  color: ${(props) => props.theme.navigationColor};
  cursor: pointer;
  font-size: 0.9rem;
`;

export const StyledSmallLoginButton = styled.button`
  width: 70%;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
  border-radius: 5px;
  border: none;
  background: ${(props) => props.theme.navigationColor};
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-size: 0.9rem;
`;
