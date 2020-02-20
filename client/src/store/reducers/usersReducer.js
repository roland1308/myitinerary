import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  ADD_USER_BEGIN,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  RESET_ERROR,
  RESET_ADDED,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from "../actions/userActions";

const initialState = {
  items: [],
  loading: false,
  error: null,
  success: false,
  avatar: "",
  errorlogging: false
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.users
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        items: [{}]
      };

    case ADD_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        success: false
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
        avatar: action.payload.picture,
        error: false,
        success: true
      };
    case ADD_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        success: false
      };

    case RESET_ERROR:
      return {
        ...state,
        error: null
      };
    case RESET_ADDED:
      return {
        ...state,
        success: false
      };

      case LOGIN_USER_BEGIN:
        return {
          ...state,
          loading: true,
          errorlogging: null,
          success: false
        };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        items: [action.payload],
        avatar: action.payload.picture,
        loading: false,
        errorlogging: false,
        success: true
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        errorlogging: action.payload.error,
        success: false
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
