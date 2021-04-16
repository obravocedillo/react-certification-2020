import React, { createContext, useContext, useReducer } from 'react';
import reducer from './MainReducer';
import { lightTheme } from '../themes/Themes';

const initialState = {
  searchQuery: '',
  videos: [],
  theme: lightTheme,
};

const MainContext = createContext(initialState);

function useMainContext() {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error(`Can't use "useMainContext" without an MainProvider!`);
  }
  return context;
}

function MainProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MainContext.Provider value={{ state, dispatch }}>{children}</MainContext.Provider>
  );
}

export { useMainContext };

export default MainProvider;
