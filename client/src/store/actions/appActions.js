// Action types
export const HOME_ON = "HOME_ON";
export const HOME_OFF = "HOME_OFF";

export const BACK_ON = "BACK_ON";
export const BACK_OFF = "BACK_OFF";

export const SEARCH_ON = "SEARCH_ON";
export const SEARCH_OFF = "SEARCH_OFF";
export const SET_CERCA = "SET_CERCA";

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