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
  margin-bottom: 0.8rem;
  :not(:first-child) {
    border-top: 1.5px solid ${(props) => props.theme.divider};
  }
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const StyledVideoImage = styled.img`
  width: 35%;
`;

export const StyledVideoInformation = styled.div`
  height: 5.5rem;
  overflow: hidden;
  white-space: break-spaces;
  text-overflow: ellipsis;
  width: 65%;
  padding-left: 1%;
  padding-right: 1%;
  text-align: left;
`;

export const StyledVideoName = styled.p`
  margin-top: 0rem;
  margin-bottom: 0rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

export const StyledVideoDescription = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.text};
`;
