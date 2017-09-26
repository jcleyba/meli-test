import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import productsReducer from './productsReducer';

export default combineReducers({
  searchReducer,
  productsReducer
});
