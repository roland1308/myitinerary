// Action types
export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const ADD_USER_BEGIN = "ADD_USER_BEGIN";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

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


export const addUser = ( user ) => {
  console.log(user);
  return dispatch => {
    dispatch(addUserBegin());
    axios
      .post("/users/add", {
        headers: {
        'content-type': 'application/x-www-form-urlencoded'
        },
        userName: user.userName,
        email: user.email,
        picture: user.picture,
        pw: user.pw})
      .then(res => {
        dispatch(addUserSuccess(res.data));
      })
      .catch(err => {
        dispatch(addUserFailure(err.message));
      });
  };
};

const addUserBegin = () => ({
  type: ADD_USER_BEGIN
});

const addUserSuccess = user => ({
  type: ADD_USER_SUCCESS,
  payload: {
    ...user
  }
});

const addUserFailure = error => ({
  type: ADD_USER_FAILURE,
  payload: {
    error
  }
});