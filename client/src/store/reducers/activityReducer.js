import {
  FETCH_ACTIVITY_BEGIN,
  FETCH_ACTIVITY_SUCCESS,
  FETCH_ACTIVITY_FAILURE
} from "../actions/activityActions";

const initialState = {
  items: [],
  loadingAct: false,
  errorAct: null
};

export default function activityReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACTIVITY_BEGIN:
      // Mark the state as "loadingAct" so we can show a spinner or something
      // Also, reset any errorActs. We're starting fresh.
      return {
        ...state,
        loadingAct: true,
        errorAct: null
      };

    case FETCH_ACTIVITY_SUCCESS:
      // All done: set loadingAct "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loadingAct: false,
        items: action.payload.activity
      };

    case FETCH_ACTIVITY_FAILURE:
      // The request failed. It's done. So set loadingAct to "false".
      // Save the errorAct, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      return {
        ...state,
        loadingAct: false,
        errorAct: true,
        items: [{}]
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
