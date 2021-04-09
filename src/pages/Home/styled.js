import styled from 'styled-components';

/**
 *Styled components used in all the component
 */
export const StyledHomePage = styled.section`
  text-align: center;
  h1 {
    font-size: 3rem;
    letter-spacing: -2px;
    height: 100%;
  }
`;

export const StyledHomePageDivider = styled.hr`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.divider};
`;
