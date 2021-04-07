import styled from 'styled-components';

// Material design imports
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

/**
 * Styled components for the page
 */
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
  border-top: 1px solid rgba(0, 0, 0, 0.2);
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
