import axios from 'axios';

export const SEARCH_REQUESTED = 'SEARCH_REQUESTED',
  SEARCH_SUCCESS = 'SEARCH_SUCCESS',
  SEARCH_ERROR = 'SEARCH_ERROR';

const searchStarted = () => {
  return {
    type: SEARCH_REQUESTED
  };
};

const searchSuccess = (payload) => {
  return {
    type: SEARCH_SUCCESS,
    payload: payload
  };
};

const searchError = (err) => {
  return {
    type: SEARCH_ERROR,
    payload: err
  };
};

export const fetchItems = (term, limit) => {
  limit = limit ? `&limit=${limit}` : '';

  return (dispatch) => {
    dispatch(searchStarted());
    return axios.get(`/api/items?q=${term}${limit}`)
      .then(response => dispatch(searchSuccess(response.data)))
      .catch(err => dispatch(searchError(err)));
  }
};

