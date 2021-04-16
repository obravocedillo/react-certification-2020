import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

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
    <section className="login">
      <h1>Welcome back!</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input
              required
              type="text"
              id="username"
              value={userName}
              onChange={(e) => userNameInputHandler(e)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input
              required
              type="password"
              id="password"
              value={password}
              onChange={(e) => passwordInputHandler(e)}
            />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
