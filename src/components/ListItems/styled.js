import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

/**
 *Styled components used in all the component
 */
export const StyledMainContainer = styled.div`
  margin-top: 1rem;
`;

export const StyledListGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .MuiPaper-rounded {
    border-radius: 10px !important;
  }
`;

export const StyledListSingleCard = styled(Paper)`
  disfplay: flex;
  flex-direction: column;
  width: 21%;
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 2rem;
  cursor: pointer;
  :hover {
    background: ${(props) => props.theme.divider};
  }
  @media only screen and (max-width: 900px) {
    width: 45%;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

export const StyledListVideoImage = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const StyledInfoContainer = styled.div`
  width: 100%;
  height: 13rem;
  overflow-hidden;
`;

export const StyledListVideoTitle = styled.h2`
  width: 100%;
  font-size: 1.1rem;
  padding-left: 5%;
  padding-right: 5%;
  overflow-wrap: anywhere;
  text-align: left;
  margin-top: 0;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export const StyledListVideoDescription = styled.p`
  width: 100%;
  font-size: 0.8rem;
  padding-left: 5%;
  padding-right: 5%;
  overflow-wrap: anywhere;
  text-align: left;
  color: gray;
  margin: 0;
`;
