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
  RESET_ADDED,
  RESET_ERROR
} from "../actions/userActions";

const initialState = {
  user: {},
  loading: false,
  errorMsg: "",
  popup: false,
  loggedIn: false,
  token: ""
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
    case ADD_USER_BEGIN:
    case TOKEN_BEGIN:
    case LOGIN_USER_BEGIN:
    case USER_LOGOUT:
      return {
        ...state,
        user: {},
        loading: false,
        errorMsg: "",
        popup: false,
        loggedIn: false,
        token: ""
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

    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        popup: true,
        errorMsg: ""
      };
    case ADD_USER_FAILURE:
      return {
        ...state,
        loading: false,
        popup: false,
        errorMsg: action.payload.error
      };

    case RESET_ADDED:
      return {
        ...state,
        popup: false
      };
    case RESET_ERROR:
      return {
        ...state,
        errorMsg: ""
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

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        popup: false,
        loggedIn: true
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        popup: true,
        loggedIn: false
      };

    case ADD_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        loggedIn: true
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
