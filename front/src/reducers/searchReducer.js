import { SEARCH_ERROR, SEARCH_REQUESTED, SEARCH_SUCCESS } from '../actions/searchActions';

const INITIAL_STATE = {
  isFetching: false,
  items: [],
  filters: [],
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_REQUESTED:
      return {...state, isFetching: true, error: null, filters: []}
    case SEARCH_SUCCESS:
      return {...state, isFetching: false, items: action.payload.data.items, filters: action.payload.data.filters}
    case SEARCH_ERROR:
      return {...state, isFetching: false, error: action.payload.message}
    default:
      return state;
  }
}
