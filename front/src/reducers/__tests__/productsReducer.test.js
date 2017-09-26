import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-enzyme';

import { FETCH_ERROR, FETCH_SUCCESS, FETCH_REQUESTED } from '../../actions/productsActions';
import reducer from '../productsReducer';

describe('Search Reducer', () => {

  const data = {
    item: {
      id: '1',
      title: 'Product'
    }
  };

  const error = {
    code: 403,
    message: 'Forbidden'
  };

  it('sets isFetching to true', () => {
    let action = {
      type: FETCH_REQUESTED
    };

    let newState = reducer(null, action);

    expect(newState.isFetching).toBe(true)
  });

  it('sets cleans error on request', () => {
    let action = {
      type: FETCH_REQUESTED
    };

    let newState = reducer(null, action);

    expect(newState.error).toBe(null)
  });

  it('sets isFetching to false on success', () => {
    let action = {
      type: FETCH_SUCCESS,
      payload: {data}
    };

    let newState = reducer(null, action);

    expect(newState.isFetching).toBe(false);
  });

  it('populates error state on error', () => {
    let action = {
      type: FETCH_ERROR,
      payload: error
    };

    let newState = reducer(null, action);
    expect(newState.error).toEqual(error.message);
  });

  it('sets isFetching to false on error', () => {
    let action = {
      type: FETCH_ERROR,
      payload: {data}
    };

    let newState = reducer(null, action);

    expect(newState.isFetching).toBe(false);
  });

  it('populates product with payload', () => {
    let action = {
      type: FETCH_SUCCESS,
      payload: {data}
    };

    let newState = reducer(null, action);

    expect(newState.product).toEqual(data.item);
  });
});
