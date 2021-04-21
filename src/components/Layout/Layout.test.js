import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout.component';

describe('Layout test', () => {
  test('test the rendering of the children passed to layout', async () => {
    render(
      <Layout>
        <p data-testid="paragraph">Test</p>
      </Layout>
    );
    const childrenRendered = await screen.getByTestId('paragraph');
    expect(childrenRendered).toBeTruthy();
  });
});
