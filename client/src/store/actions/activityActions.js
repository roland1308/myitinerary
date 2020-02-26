// Action types
export const FETCH_ACTIVITY_BEGIN = "FETCH_ACTIVITY_BEGIN";
export const FETCH_ACTIVITY_SUCCESS = "FETCH_ACTIVITY_SUCCESS";
export const FETCH_ACTIVITY_FAILURE = "FETCH_ACTIVITY_FAILURE";

export function fetchActivities(itinerary_id) {
  return dispatch => {
    dispatch(fetchActivityBegin());
    let url = "/itineraries/populate/" + itinerary_id;
    return fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchActivitySuccess(json.activities));
        return json;
      })
      .catch(error => dispatch(fetchActivityFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchActivityBegin = () => ({
  type: FETCH_ACTIVITY_BEGIN
});
export const fetchActivitySuccess = activity => ({
  type: FETCH_ACTIVITY_SUCCESS,
  payload: { activity }
});
export const fetchActivityFailure = error => ({
  type: FETCH_ACTIVITY_FAILURE,
  payload: { error }
});
