import {
  FETCH_ACTIVITY_BEGIN,
  FETCH_ACTIVITY_SUCCESS,
  FETCH_ACTIVITY_FAILURE
} from "../actions/activityActions";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function activityReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACTIVITY_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_ACTIVITY_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        items: action.payload.activity
      };

    case FETCH_ACTIVITY_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      return {
        ...state,
        loading: false,
        error: true,
        items: [{}]
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
