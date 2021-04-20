import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import MainProvider from '../../state/MainProvider';

import Navigation from './Navigation.component';
import Home from '../../pages/Home';
import Login from '../../pages/Login';

describe('Navigation Component tests', () => {
  test('check the drawer status after click in drawer openner', async () => {
    const wrapper = ({ children }) => <MainProvider>{children}</MainProvider>;
    render(<Navigation />, {
      wrapper,
    });
    const drawerOpener = await screen.getByTestId('drawer-opener');
    const drawerBeforeOpen = await screen.queryByTestId('drawer-element');
    expect(drawerBeforeOpen).toEqual(null);
    act(() => {
      fireEvent.click(drawerOpener);
    });
    /**
     * check drawer after drawer opener is clicked, drawe must be rendered,
     * if drawer is declared before the click event the test wil be false
     */
    const drawerAfterOpen = await screen.getByTestId('drawer-element');
    expect(drawerAfterOpen).toBeTruthy();
  });

  test('check the input value after user change', async () => {
    const wrapper = ({ children }) => <MainProvider>{children}</MainProvider>;
    render(<Navigation />, {
      wrapper,
    });
    const searchBar = await screen.getByLabelText('search');
    // Searcbar should be initial value
    expect(searchBar.value).toBe('');
    fireEvent.change(searchBar, { target: { value: 'React' } });
    expect(searchBar.value).toBe('react');
  });

  test('check the theme value after user change', async () => {
    const wrapper = ({ children }) => <MainProvider>{children}</MainProvider>;
    render(<Navigation />, {
      wrapper,
    });
    const themeBar = await screen.getByTestId('theme select');
    // Searcbar should be initial value
    expect(themeBar.value).toBe('light');
    fireEvent.change(themeBar, { target: { value: 'dark' } });
    expect(themeBar.value).toBe('dark');
  });

  test('check redirect after login button', async () => {
    const wrapper = ({ children }) => <MainProvider>{children}</MainProvider>;
    render(
      <MemoryRouter initialEntries={['/']}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </MemoryRouter>,
      {
        wrapper,
      }
    );
    const loginButton = await screen.getByTestId('login button');
    fireEvent.click(loginButton);
    const userName = await screen.getByTestId('user name');
    fireEvent.change(userName, { target: { value: 'oliver' } });
    expect(userName.value).toBe('oliver');
  });
});
