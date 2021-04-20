import React, { useState, useEffect, useContext, useCallback } from 'react';

import {
  AUTH_STORAGE_KEY,
  USER_STORAGE_KEY,
  FAVORITES_STORAGE_KEY,
} from '../../utils/constants';
import { storage } from '../../utils/storage';
import { mockedUser } from '../../data/mocked.user';

const initialState = {
  authenticated: false,
  user: null,
  favorites: [],
  login: () => {},
  logout: () => {},
};

const AuthContext = React.createContext(initialState);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  // Use auth will be set to true initially for first deliverble
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const currentUser = storage.get(USER_STORAGE_KEY);
    const alreadyAuthenticated = storage.get(AUTH_STORAGE_KEY);
    const savedFavorites = storage.get(FAVORITES_STORAGE_KEY);
    if (currentUser && alreadyAuthenticated) {
      storage.set(AUTH_STORAGE_KEY, alreadyAuthenticated);
      storage.set(USER_STORAGE_KEY, currentUser);
      setUser(mockedUser);
      setAuthenticated(true);
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } else {
      storage.set(FAVORITES_STORAGE_KEY, null);
    }
  }, []);

  const login = useCallback((username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'wizeline' && password === 'Rocks!') {
          storage.set(AUTH_STORAGE_KEY, true);
          storage.set(USER_STORAGE_KEY, JSON.stringify(mockedUser));
          setUser(mockedUser);
          setAuthenticated(true);
          return resolve('success');
        }
        return reject(new Error('Username or password invalid'));
      }, 500);
    });
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    setUser(null);
    storage.set(AUTH_STORAGE_KEY, false);
    storage.set(USER_STORAGE_KEY, null);
  }, []);

  const addToFavorites = useCallback(
    (newItem) => {
      const currentFavorites = [...favorites];
      currentFavorites.push(newItem);
      setFavorites(currentFavorites);
      storage.set(FAVORITES_STORAGE_KEY, JSON.stringify(currentFavorites));
    },
    [favorites]
  );

  const deleteFavorites = useCallback(
    (id) => {
      let currentFavorites = [...favorites];
      currentFavorites = currentFavorites.filter((item) => {
        return item.id !== id;
      });
      setFavorites(currentFavorites);
      storage.set(FAVORITES_STORAGE_KEY, JSON.stringify(currentFavorites));
    },
    [favorites]
  );

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user,
        authenticated,
        favorites,
        addToFavorites,
        deleteFavorites,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
