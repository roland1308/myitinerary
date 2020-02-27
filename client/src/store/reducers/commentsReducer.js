import { ADD_COMMENT_BEGIN } from "../actions/commentActions";
import { ADD_COMMENT_SUCCESS } from "../actions/commentActions";
import { ADD_COMMENT_FAILURE } from "../actions/commentActions";

const initialState = {
  errorComment: false,
  loading: false,
  errorMsg: "",
  commentId: ""
};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT_BEGIN:
      return {
        ...state,
        errorComment: false,
        loading: true,
        errorMsg: ""
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        errorComment: false,
        loading: false,
        errorMsg: "",
        commentId: action.payload
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        errorComment: true,
        loading: false,
        errorMsg: action.payload
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
