import styled from 'styled-components';

export const StyledVideoDetailsMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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
    width: 100%;
  }
`;

export const StyledVideoDetailsRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;
  }
`;
