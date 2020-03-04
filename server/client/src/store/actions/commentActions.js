export const ADD_COMMENT_BEGIN = "ADD_COMMENT_BEGIN";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

const axios = require("axios");

export const addComment = comment => {
  return async dispatch => {
    try {
      dispatch(addCommentBegin());
      const response = await axios.post("/comments/add", comment, {
        headers: {
          authorization: `bearer ${comment.token}`
        }
      });
      if (response.data.name === "MongoError") {
        dispatch(addCommentFailure(response.data.errmsg));
      } else {
        dispatch(addCommentSuccess(response.data));
      }
    } catch (error) {
      dispatch(addCommentFailure(error.message));
    }
    return "done";
  };
};

export const addCommentBegin = () => ({
  type: ADD_COMMENT_BEGIN
});
export const addCommentSuccess = commentId => ({
  type: ADD_COMMENT_SUCCESS,
  payload: commentId
});
export const addCommentFailure = error => ({
  type: ADD_COMMENT_FAILURE,
  payload: {
    error
  }
});
