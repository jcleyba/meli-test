import { FETCH_ERROR, FETCH_REQUESTED, FETCH_SUCCESS } from '../actions/productsActions';

const INITIAL_STATE = {
  isFetching: false,
  product: [],
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REQUESTED:
      return {...state, isFetching: true, error: null}
    case FETCH_SUCCESS:
      return {...state, isFetching: false, product: action.payload.data.item}
    case FETCH_ERROR:
      return {...state, isFetching: false, error: action.payload.message}
    default:
      return state;
  }
}
