import { HOME_ON, HOME_OFF } from "../actions/appActions";

const initialState = {
  homeLink: false
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

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}