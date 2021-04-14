import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import MainProvider from '../../state/MainProvider';

import Navigation from './Navigation.component';

describe('Navigation Component tests', () => {
  test('check the drawer status after click in drawer openner', async () => {
    const searchVideosMock = jest.fn();
    const wrapper = ({ children }) => <MainProvider>{children}</MainProvider>;
    render(<Navigation initialInputValue="Wizeline" searchVideos={searchVideosMock} />, {
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
    const searchVideosMock = jest.fn();
    const wrapper = ({ children }) => <MainProvider>{children}</MainProvider>;
    render(<Navigation initialInputValue="Food" searchVideos={searchVideosMock} />, {
      wrapper,
    });
    const searchBar = await screen.getByLabelText('search');
    // Searcbar should be initial value
    expect(searchBar.value).toBe('Food');
    fireEvent.change(searchBar, { target: { value: 'React' } });
    expect(searchBar.value).toBe('react');
  });
});
