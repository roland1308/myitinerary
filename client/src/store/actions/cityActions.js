// Action types
export const FETCH_CITIES_BEGIN   = 'FETCH_CITIES_BEGIN';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const FETCH_CITIES_FAILURE = 'FETCH_CITIES_FAILURE';

export function fetchCities() {
    return dispatch => {
      dispatch(fetchCitiesBegin());
      return fetch("/cities/all")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchCitiesSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchCitiesFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

export const fetchCitiesBegin = () => ({
  type: FETCH_CITIES_BEGIN
});
export const fetchCitiesSuccess = cities => ({
  type: FETCH_CITIES_SUCCESS,
  payload: { cities }
});
export const fetchCitiesFailure = error => ({
  type: FETCH_CITIES_FAILURE,
  payload: { error }
});