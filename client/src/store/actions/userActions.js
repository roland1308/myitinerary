// Action types
export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const ADD_USER_BEGIN = "ADD_USER_BEGIN";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

export const RESET_ERROR = "RESET_ERROR";
export const RESET_ADDED = "RESET_ADDED";

export const LOGIN_USER_BEGIN = "LOGIN_USER_BEGIN";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

const axios = require("axios");

export const fetchUsers = () => {
  return async dispatch => {
    dispatch(fetchUsersBegin());
    try {
      const response = await axios.get("/users/all");
      dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      dispatch(fetchUsersFailure(error));
    }
    return "done";
  };
};

export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users }
});
export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: { error }
});

export const addUser = user => {
  return async dispatch => {
    dispatch(addUserBegin());
    try {
      const response = await axios.post("/users/add", user);
      if (typeof response.data === "string") {
        dispatch(addUserFailure(response.data));
      } else {
        dispatch(addUserSuccess(response.data));
      }
    } catch (error) {
      dispatch(addUserFailure(error.message));
    }
    return "done";
  };
};

export const addUserBegin = () => ({
  type: ADD_USER_BEGIN
});

export const addUserSuccess = user => ({
  type: ADD_USER_SUCCESS,
  payload: {
    ...user
  }
});

export const addUserFailure = error => ({
  type: ADD_USER_FAILURE,
  payload: {
    error
  }
});

export const resetError = () => ({
  type: RESET_ERROR
});

export const resetAdded = () => ({
  type: RESET_ADDED
});

export const checkToken = (token) => {
  return async dispatch => {
    dispatch(loginUserBegin());
    try {
      const response = await axios.get("users/check",
       {
        headers: {
          "authorization": `bearer ${token}`
        }
      }
      );
      console.log("RESPONSE", response.data);
      dispatch(loginUserSuccess(response.data));
    } catch (error) {
      console.log("RESPONSE", error);
      dispatch(loginUserFailure(error));
    }
    return "done";
  };
};

export const loginUserBegin = () => ({
  type: LOGIN_USER_BEGIN
});

export const loginUserSuccess = user => ({
  type: LOGIN_USER_SUCCESS,
  payload: {
    ...user
  }
});

export const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: {
    error
  }
});