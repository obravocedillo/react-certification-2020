import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainProvider from '../../state/MainProvider';
import AuthProvider from '../../providers/Auth';

import Home from './Home.page';

describe('Home Page tests', () => {
  test('check correct render of home page', async () => {
    const wrapper = ({ children }) => {
      return (
        <MainProvider>
          <AuthProvider>
            <MemoryRouter>{children}</MemoryRouter>
          </AuthProvider>
        </MainProvider>
      );
    };
    render(<Home />, { wrapper });
    // Navbar rendered
    const searchBar = await screen.getByLabelText('search');
    expect(searchBar.value).toBe('');
  });
});
