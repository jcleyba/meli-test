import axios from 'axios';

export const FETCH_REQUESTED = 'FETCH_REQUESTED',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR';

const fetchStarted = () => {
  return {
    type: FETCH_REQUESTED
  };
};

const fetchSuccess = (payload) => {
  return {
    type: FETCH_SUCCESS,
    payload: payload
  };
};

const fetchError = (err) => {
  return {
    type: FETCH_ERROR,
    payload: err
  };
};

export const fetchItemById = (id) => {
  return (dispatch) => {
    dispatch(fetchStarted());
    axios.get(`/api/items/${id}`)
      .then(response => dispatch(fetchSuccess(response.data)))
      .catch(err => dispatch(fetchError(err)));
  }
};

