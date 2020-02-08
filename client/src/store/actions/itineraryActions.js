// Action types
export const FETCH_ITINERARY_BEGIN = "FETCH_ITINERARY_BEGIN";
export const FETCH_ITINERARY_SUCCESS = "FETCH_ITINERARY_SUCCESS";
export const FETCH_ITINERARY_FAILURE = "FETCH_ITINERARY_FAILURE";

export function fetchItinerary(city_id) {
  return dispatch => {
    dispatch(fetchItineraryBegin());
    let url = "/itineraries/" + city_id;
    console.log(url)
;    return fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchItinerarySuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchItineraryFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
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
