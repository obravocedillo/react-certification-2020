import styled from 'styled-components';

/**
 *Styled components used in all the component
 */
export const StyledMainContainer = styled.div`
  width: 95%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

export const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .MuiChip-root:not(:last-child) {
    margin-right: 2%;
  }

  @media only screen and (max-width: 900px) {
    justify-content: flex-start;
  }
`;
