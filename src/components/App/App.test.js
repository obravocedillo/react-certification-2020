import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

describe('ListItems Component tests', () => {
  test('count number of videos displayed according to data passed as prop', async () => {
    render(<App />);
    // App renders home page in starting pathname
    const searchBar = await screen.getByLabelText('search');
    expect(searchBar.value).toBe('');
  });
});
