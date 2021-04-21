import React from 'react';
import { render, screen } from '@testing-library/react';
import Theme from './Theme.component';
import MainProvider from '../../state/MainProvider';

describe('Theme test', () => {
  test('test the rendering of the children passed to theme', async () => {
    // create provider so state is accesible by Theme
    const wrapper = ({ children }) => <MainProvider>{children}</MainProvider>;
    render(
      <Theme>
        <p data-testid="paragraph">Test</p>
      </Theme>,
      { wrapper }
    );
    const childrenRendered = await screen.getByTestId('paragraph');
    expect(childrenRendered).toBeTruthy();
  });
});
