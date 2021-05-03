import { darkTheme, lightTheme, vintageTheme } from '../themes/Themes';

export default function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SEARCH': {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }
    case 'CHANGE_VIDEOS': {
      return {
        ...state,
        videos: [...action.payload],
      };
    }
    case 'LOGIN_USER': {
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };
    }
    case 'LOGOUT_USER': {
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
    }
    case 'CHANGE_THEME': {
      let newTheme;
      switch (action.payload) {
        case 'light':
          newTheme = lightTheme;
          break;
        case 'dark':
          newTheme = darkTheme;
          break;
        case 'vintage':
          newTheme = vintageTheme;
          break;
        default:
          newTheme = lightTheme;
      }
      return {
        ...state,
        theme: newTheme,
      };
    }
    default:
      throw new Error('Unkown action');
  }
}
