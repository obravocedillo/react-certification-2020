import styled from 'styled-components';

/**
 *Styled components used in all the component
 */
export const StyledMainContainer = styled.div`
  margin-top: 0rem;
  height: 40rem;
  overflow-y: scroll;
  width: 100%;
`;

export const StyledListGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const StyledVideoGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 0.5rem;
  :not(:first-child) {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const StyledVideoImage = styled.img`
  width: 35%;
`;

export const StyledVideoName = styled.p`
  width: 65%;
  padding-left: 1%;
  padding-right: 1%;
  text-align: left;
  margin-top: 0rem;
  margin-bottom: 0rem;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
`;
