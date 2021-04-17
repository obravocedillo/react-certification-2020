import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Navigation from '../../components/Navigation';

import { useAuth } from '../../providers/Auth';

import {
  LoginMainContainer,
  LoginTitle,
  LoginCard,
  LoginButton,
  LoginInput,
  LoginStrong,
  LoginFormGroup,
} from './styled';

function LoginPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const history = useHistory();

  const authenticate = async (event) => {
    event.preventDefault();
    try {
      const respond = await login(userName, password);
      if (respond === 'success') {
        history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userNameInputHandler = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  const passwordInputHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  return (
    <>
      <Navigation />
      <LoginMainContainer>
        <LoginCard>
          <LoginTitle>Welcome back!</LoginTitle>
          <form onSubmit={authenticate}>
            <LoginFormGroup>
              <LoginStrong>username </LoginStrong>
              <LoginInput
                required
                type="text"
                id="username"
                value={userName}
                onChange={(e) => userNameInputHandler(e)}
              />
            </LoginFormGroup>
            <LoginFormGroup>
              <LoginStrong>password </LoginStrong>
              <LoginInput
                required
                type="password"
                id="password"
                value={password}
                onChange={(e) => passwordInputHandler(e)}
              />
            </LoginFormGroup>
            <LoginButton type="submit">Login</LoginButton>
          </form>
        </LoginCard>
      </LoginMainContainer>
    </>
  );
}

export default LoginPage;
