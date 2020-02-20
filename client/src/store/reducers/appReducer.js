import {
  HOME_ON,
  HOME_OFF,
  SEARCH_ON,
  SEARCH_OFF,
  SET_CERCA,
  BACK_ON,
  BACK_OFF,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  RESET_ERROR,
  RESET_LOGGED,
  USER_LOGOUT,
  USER_LOGIN
} from "../actions/appActions";

const initialState = {
  homeLink: false,
  searchDiv: false,
  campoCerca: "",
  goPrev: true,
  token: "",
  error: null,
  success: null,
  loggedIn: false
};

export default function popularsReducer(state = initialState, action) {
  switch (action.type) {
    case HOME_ON:
      return {
        ...state,
        homeLink: true
      };
    case HOME_OFF:
      return {
        ...state,
        homeLink: false
      };

    case BACK_ON:
      return {
        ...state,
        goPrev: true
      };
    case BACK_OFF:
      return {
        ...state,
        goPrev: false
      };

    case SEARCH_ON:
      return {
        ...state,
        searchDiv: true
      };
    case SEARCH_OFF:
      return {
        ...state,
        searchDiv: false
      };
    case SET_CERCA:
      return {
        ...state,
        campoCerca: action.payload.campoCerca
      };

    case LOGIN_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        success: false
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        loading: false,
        error: false,
        success: true
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: true
      };

    case RESET_ERROR:
      return {
        ...state,
        error: null
      };
    case RESET_LOGGED:
      return {
        ...state,
        success: false
      };

    case USER_LOGIN:
      return {
        ...state,
        loggedIn: true
      };
    case USER_LOGOUT:
      return {
        ...state,
        loggedIn: false,
        error: false
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
