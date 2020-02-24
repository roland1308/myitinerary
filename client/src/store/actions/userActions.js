// Action types
export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const ADD_USER_BEGIN = "ADD_USER_BEGIN";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

export const LOGIN_USER_BEGIN = "LOGIN_USER_BEGIN";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const TOKEN_BEGIN = "TOKEN_BEGIN";
export const TOKEN_SUCCESS = "TOKEN_SUCCESS";
export const TOKEN_FAILURE = "TOKEN_FAILURE";

export const ADD_TOKEN = "ADD_TOKEN";

export const USER_LOGOUT = "USER_LOGOUT";

export const RESET_ERROR = "RESET_ERROR";
export const RESET_ADDED = "RESET_ADDED";

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
      console.log(response.data);
      if (response.data.name === "MongoError") {
        dispatch(addUserFailure(response.data.errmsg));
      } else {
        dispatch(addUserSuccess(response.data));
        const token = await axios.post("/users/token", response.data);
        window.localStorage.setItem("token", token.data);
        dispatch(addToken(token.data));
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
    user
  }
});

export const addToken = token => ({
  type: ADD_TOKEN,
  payload: {
    token
  }
});

export const addUserFailure = error => ({
  type: ADD_USER_FAILURE,
  payload: {
    error
  }
});

export const resetAdded = () => ({
  type: RESET_ADDED
});

export const checkToken = token => {
  return async dispatch => {
    dispatch(checkTokenBegin());
    try {
      const response = await axios.get("/users/check", {
        headers: {
          authorization: `bearer ${token}`
        }
      });
      dispatch(checkTokenSuccess(response.data));
    } catch (error) {
      dispatch(checkTokenFailure(error));
    }
    return "done";
  };
};

export const loginUser = user => {
  return async dispatch => {
    dispatch(loginUserBegin());
    try {
      const response = await axios.post("/users/login", user);
      if (typeof response.data !== "string") {
        const token = await axios.post("/users/token", response.data);
        window.localStorage.setItem("token", token.data);
        dispatch(addToken(token.data));
        dispatch(loginUserSuccess(user));
      } else {
        dispatch(loginUserFailure(response.data));
      }
    } catch (error) {
      dispatch(loginUserFailure(error.message));
    }
    return "done";
  };
};

export const checkTokenBegin = () => ({
  type: TOKEN_BEGIN
});

export const checkTokenSuccess = user => ({
  type: TOKEN_SUCCESS,
  payload: {
    user
  }
});

export const checkTokenFailure = error => ({
  type: TOKEN_FAILURE,
  payload: {
    error
  }
});

export const loginUserBegin = () => ({
  type: LOGIN_USER_BEGIN
});

export const loginUserSuccess = user => ({
  type: LOGIN_USER_SUCCESS,
  payload: {
    user
  }
});

export const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: {
    error
  }
});

export const logInUserOff = () => ({
  type: USER_LOGOUT
})

export const resetError = () => ({
  type: RESET_ERROR
});
