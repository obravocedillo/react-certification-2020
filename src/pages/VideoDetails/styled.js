import styled from 'styled-components';

export const StyledVideoDetailsMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledVideoDetailsLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledVideoDetailsRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledVideoContainer = styled.div`
  width: 100%;
  min-height: 25rem;
`;

export const StyledVideo = styled.iframe`
  width: 100%;
  min-height: 25rem;
  border: 1.5px solid gray;
`;

export const StyledVideoTitle = styled.h3`
  width: 100%;
  font-size: 1.4rem;
  padding-left: 1%;
  padding-right: 1%;
  overflow-wrap: anywhere;
  text-align: left;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  font-weight: 500;
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
`;
