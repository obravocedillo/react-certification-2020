import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainProvider from '../../state/MainProvider';
import AuthProvider from '../../providers/Auth';

import Private from './Private.component';

describe('Private tests', () => {
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
    render(<Private />, { wrapper });
    // Private rendered correctly
  });
});
