import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';

import Navigation from './Navigation.component';

describe('Navigation Component tests', () => {
  test('check the drawer status after click in drawer openner', async () => {
    render(<Navigation />);
    const drawerOpener = await screen.getByRole('drawer-opener');
    const drawerBeforeOpen = await screen.queryByRole('drawer-element');
    expect(drawerBeforeOpen).toEqual(null);
    act(() => {
      fireEvent.click(drawerOpener);
    });
    /**
     * check drawer after drawer opener is clicked, drawe must be rendered,
     * if drawer is declared before the click event the test wil be false
     */
    const drawerAfterOpen = await screen.getByRole('drawer-element');
    expect(drawerAfterOpen).toBeTruthy();
  });

  test('check the input value after user change', async () => {
    render(<Navigation showSearch />);
    const searchBar = await screen.getByLabelText('search');
    expect(searchBar.value).toBe('');
    fireEvent.change(searchBar, { target: { value: 'React' } });
    expect(searchBar.value).toBe('react');
  });
});
