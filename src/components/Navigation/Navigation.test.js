import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Navigation from './Navigation.component';

test('check the drawer status after click in drawer openner', async () => {
  render(<Navigation />);
  const drawerOpener = await screen.getByRole('drawer-opener');
  fireEvent.click(drawerOpener);
  /**
   * check drawer after drawer opener is clicked, drawe must be rendered,
   * if drawer is declared before the click event the test wil be false
   */
  const drawer = await screen.getAllByRole('drawer-element');
  expect(drawer).toBeTruthy();
});

test('check the input value after user change', async () => {
  render(<Navigation />);
  const searchBar = await screen.getByLabelText('search');
  fireEvent.change(searchBar, { target: { value: 'wizeline' } });
  expect(searchBar.value).toBe('wizeline');
});
