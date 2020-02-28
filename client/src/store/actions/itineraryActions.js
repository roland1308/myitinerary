// Action types
export const FETCH_ITINERARY_BEGIN = "FETCH_ITINERARY_BEGIN";
export const FETCH_ITINERARY_SUCCESS = "FETCH_ITINERARY_SUCCESS";
export const FETCH_ITINERARY_FAILURE = "FETCH_ITINERARY_FAILURE";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

const axios = require("axios");

export function fetchItinerary(city_id) {
  return async dispatch => {
    dispatch(fetchItineraryBegin());
    let url = "/itineraries/" + city_id;
    try {
      const response = await axios.get(url);
      if (response.data.name === "MongoError") {
        dispatch(fetchItineraryFailure("error"));
      } else {
        dispatch(fetchItinerarySuccess(response.data));
      }
    } catch (error) {
      dispatch(fetchItineraryFailure(error.message));
    }
    return "done";
  };
}

export const fetchItineraryBegin = () => ({
  type: FETCH_ITINERARY_BEGIN
});
export const fetchItinerarySuccess = itinerary => ({
  type: FETCH_ITINERARY_SUCCESS,
  payload: { itinerary }
});
export const fetchItineraryFailure = error => ({
  type: FETCH_ITINERARY_FAILURE,
  payload: { error }
});

export const addCommentId = update => {
  return async dispatch => {
    try {
      const response = await axios.put("/itineraries/addcommentid", update);
      if (response.data.name === "MongoError") {
        dispatch(addCommentFailure(response.data.errmsg));
        // } else {
        //   dispatch(addCommentSuccess(response.data));
      }
    } catch (error) {
      dispatch(addCommentFailure(error.message));
    }
    return "done";
  };
};

export const addCommentFailure = error => ({
  type: ADD_COMMENT_FAILURE,
  payload: {
    error
  }
});
