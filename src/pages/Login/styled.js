import styled from 'styled-components';

/**
 * Styled components for the page
 */
export const LoginMainContainer = styled.div`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginCard = styled.div`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  width: 50%;
  margin-left: 25%;
  padding-top: 3rem;
  padding-bottom 3rem;
  padding-left: 5%;
  padding-right: 5%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media only screen and (max-width: 900px) {
    width: 90%;
    margin-left: 5%;
  }
`;

export const LoginTitle = styled.h1`
  color: ${(props) => props.theme.text};
  text-align: center;
  margin-top: 0;
`;

export const LoginButton = styled.button`
  width: 8rem;
  margin-top: 1rem;
  padding: 0.4rem 0.6rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.text};
`;

export const LoginInput = styled.input`
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
  width: 100%;
  padding: 0.4rem 0.6rem;
  border-radius: 5px;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const LoginStrong = styled.strong`
  display: block;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 0.4rem;
`;

export const LoginFormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
