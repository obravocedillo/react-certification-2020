import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainProvider from '../../state/MainProvider';
import AuthProvider from '../../providers/Auth';

import Login from './Login.page';

describe('Login Page tests', () => {
  test('check correct render of login', async () => {
    const wrapper = ({ children }) => {
      return (
        <MainProvider>
          <AuthProvider>
            <MemoryRouter>{children}</MemoryRouter>
          </AuthProvider>
        </MainProvider>
      );
    };
    render(<Login />, { wrapper });
    // Navbar rendered
    const userName = await screen.getByTestId('user name');
    const password = await screen.getByTestId('password');
    expect(userName).toBeTruthy();
    expect(password).toBeTruthy();
  });

  test('check correct change of username and password', async () => {
    const wrapper = ({ children }) => {
      return (
        <MainProvider>
          <AuthProvider>
            <MemoryRouter>{children}</MemoryRouter>
          </AuthProvider>
        </MainProvider>
      );
    };
    render(<Login />, { wrapper });
    // Navbar rendered
    const userName = await screen.getByTestId('user name');
    const password = await screen.getByTestId('password');
    fireEvent.change(userName, { target: { value: 'oliver' } });
    fireEvent.change(password, { target: { value: '1234' } });
    expect(userName.value).toBe('oliver');
    expect(password.value).toBe('1234');
  });
});
