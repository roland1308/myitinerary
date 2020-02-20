// Action types
export const HOME_ON = "HOME_ON";
export const HOME_OFF = "HOME_OFF";

export const BACK_ON = "BACK_ON";
export const BACK_OFF = "BACK_OFF";

export const SEARCH_ON = "SEARCH_ON";
export const SEARCH_OFF = "SEARCH_OFF";
export const SET_CERCA = "SET_CERCA";

export const LOGIN_USER_BEGIN = "LOGIN_USER_BEGIN";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const RESET_ERROR = "RESET_ERROR";
export const RESET_LOGGED = "RESET_LOGGED";

export const USER_LOGOUT = "USER_LOGOUT";
export const USER_LOGIN = "USER_LOGIN";

const axios = require("axios");

export const homeOn = () => ({
  type: HOME_ON,
  payload: true
});
export const homeOff = () => ({
  type: HOME_OFF,
  payload: false
});

export const backOn = () => ({
  type: BACK_ON,
  payload: true
});
export const backOff = () => ({
  type: BACK_OFF,
  payload: false
});

export const searchOn = () => ({
  type: SEARCH_ON,
  payload: true
});
export const searchOff = () => ({
  type: SEARCH_OFF,
  payload: false
});

export const setCampoCerca = (campoCerca) => ({
  type: SET_CERCA,
  payload: { campoCerca }
})

export const loginUser = user => {
  return async dispatch => {
    dispatch(loginUserBegin());
    try {
      const response = await axios.post("/users/login", user);
      if (!response.data.success) {
        dispatch(loginUserFailure(response.data.token));
      } else {
        dispatch(loginUserSuccess(response.data.token));
      }
    } catch (error) {
      dispatch(loginUserFailure(error.message));
    }
    return "done";
  };
};

const loginUserBegin = () => ({
  type: LOGIN_USER_BEGIN
});

const loginUserSuccess = token => ({
  type: LOGIN_USER_SUCCESS,
  payload: {
    token
  }
});

const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: {
    error
  }
});

export const resetError = () => ({
  type: RESET_ERROR
});

export const resetLogged = () => ({
  type: RESET_LOGGED
});

export const logInOn = () => ({
  type: USER_LOGIN
})
export const logInOff = () => ({
  type: USER_LOGOUT
})