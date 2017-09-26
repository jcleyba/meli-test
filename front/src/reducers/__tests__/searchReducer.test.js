import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-enzyme';

import { SEARCH_ERROR, SEARCH_SUCCESS, SEARCH_REQUESTED } from '../../actions/searchActions';
import reducer from '../searchReducer';

describe('Search Reducer', () => {

  const data = {
    items: [{
      id: '1',
      title: 'Product'
    }]
  };

  const error = {
    code: 403,
    message: 'Forbidden'
  };

  it('sets isFetching to true', () => {
    let action = {
      type: SEARCH_REQUESTED
    };

    let newState = reducer(null, action);

    expect(newState.isFetching).toBe(true)
  });

  it('sets cleans error on request', () => {
    let action = {
      type: SEARCH_REQUESTED
    };

    let newState = reducer(null, action);

    expect(newState.error).toBe(null)
  });

  it('sets isFetching to false on success', () => {
    let action = {
      type: SEARCH_SUCCESS,
      payload: {data}
    };

    let newState = reducer(null, action);

    expect(newState.isFetching).toBe(false);
  });

  it('populates error state on error', () => {
    let action = {
      type: SEARCH_ERROR,
      payload: error
    };

    let newState = reducer(null, action);

    expect(newState.error).toEqual(error.message);
  });

  it('sets isFetching to false on error', () => {
    let action = {
      type: SEARCH_ERROR,
      payload: {data}
    };

    let newState = reducer(null, action);

    expect(newState.isFetching).toBe(false);
  });

  it('populates items with payload', () => {
    let action = {
      type: SEARCH_SUCCESS,
      payload: {data}
    };

    let newState = reducer(null, action);

    expect(newState.items).toHaveLength(data.items.length);
  });
});
