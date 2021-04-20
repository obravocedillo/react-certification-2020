import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainProvider from '../../state/MainProvider';
import AuthProvider from '../../providers/Auth';

import NotFound from './NotFound.page';

describe('Not Found Page tests', () => {
  test('check correct render of not found', async () => {
    const wrapper = ({ children }) => {
      return (
        <MainProvider>
          <AuthProvider>
            <MemoryRouter>{children}</MemoryRouter>
          </AuthProvider>
        </MainProvider>
      );
    };
    render(<NotFound />, { wrapper });
    // Navbar rendered
    const notFoundImage = await screen.getByTestId('not found');
    expect(notFoundImage).toBeTruthy();
  });
});
