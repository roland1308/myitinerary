import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  ADD_USER_BEGIN,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  TOKEN_BEGIN,
  TOKEN_SUCCESS,
  TOKEN_FAILURE,
  ADD_TOKEN,
  USER_LOGOUT,
  RESET_ADDED
} from "../actions/userActions";

const initialState = {
  user: {},
  loading: false,
  errorMsg: "",
  credentials: true,
  loggedIn: false,
  token: ""
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        errorMsg: null
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.users
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: true,
        user: [{}]
      };

    case ADD_USER_BEGIN:
      return {
        ...state,
        loading: true,
        errorMsg: "",
        success: false
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        errorMsg: "",
        success: true
      };
    case ADD_USER_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload.error,
        success: false
      };

    case RESET_ADDED:
      return {
        ...state,
        success: true
      };

    case TOKEN_BEGIN:
      return {
        ...state,
        loading: true
      };
    case TOKEN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        loggedIn: true
      };
    case TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false
      };

    case LOGIN_USER_BEGIN:
      return {
        ...state,
        loading: true,
        credentials: true,
        loggedIn: false
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        credentials: true,
        loggedIn: true
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        credentials: false,
        loggedIn: false
      };

    case ADD_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        loggedIn: true
      };

    case USER_LOGOUT:
      return {
        ...state,
        user: {},
        loading: false,
        errorMsg: "",
        credentials: true,
        loggedIn: false,
        token: ""
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
