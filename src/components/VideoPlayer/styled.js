import styled from 'styled-components';

/**
 *Styled components used in all the component
 */
export const StyledVideoContainer = styled.div`
  width: 100%;
  min-height: 28rem;
  @media only screen and (max-width: 900px) {
    min-height: 20rem;
  }
`;

export const StyledVideo = styled.iframe`
  width: 100%;
  min-height: 28rem;
  border: 1.5px solid gray;
  @media only screen and (max-width: 900px) {
    min-height: 20rem;
  }
`;

export const StyledVideoTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const StyledVideoTitle = styled.h3`
  width: 90%;
  font-size: 1.4rem;
  padding-left: 1%;
  padding-right: 1%;
  overflow-wrap: anywhere;
  text-align: left;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.text};
  @media only screen and (max-width: 900px) {
    width: 82%;
  }
`;

export const StyledVideoLike = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  @media only screen and (max-width: 900px) {
    width: 18%;
  }
`;

export const StyledVideoDescription = styled.p`
  width: 100%;
  font-size: 1rem;
  padding-left: 1%;
  padding-right: 1%;
  overflow-wrap: anywhere;
  text-align: left;
  color: gray;
  margin: 0;
  margin-top: 0.5rem;
  color: ${(props) => props.theme.text};
`;
