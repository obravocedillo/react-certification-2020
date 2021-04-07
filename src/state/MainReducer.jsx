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
      return {
        ...state,
        theme: action.payload,
      };
    }
    default:
      throw new Error('Unkown action');
  }
}
