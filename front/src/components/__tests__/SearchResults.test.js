import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-enzyme';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

import { SearchResults } from '../SearchResults';

describe('ProductDetail Component', () => {

  let wrapper;
  let mounted;

  const props = {
    items: [{
      id: 1,
      title: 'Title',
      price: {amount: 10},
      address: {state_name: 'Córdoba'}
    }],
    isFetching: false,
    filters: [],
    location: {
      search: ''
    }
  };

  const Component = (props) => {
    return <MemoryRouter>
      <SearchResults {...props}/>
    </MemoryRouter>
  };


  beforeEach(() => {
    wrapper = shallow(<Component {...props}/>);
    mounted = mount(<Component {...props}/>);
  });

  afterEach(() => {
    wrapper = null;
    mounted = null;
  });

  describe('SearchResults', () => {

    it('matches current snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should have isFetching prop', () => {
      expect(mounted.find('SearchResults').props()).toHaveProperty('isFetching');
    });

    it('should have items prop', () => {
      expect(mounted.find('SearchResults').props()).toHaveProperty('items');
      expect(mounted.find('SearchResults').props().items).toHaveLength(1);
    });

    it('should have a search-results className present', () => {
      expect(mounted.find('.search-results')).toBePresent();
    });

    it('should contain a List Container', () => {
      expect(mounted.find('ListContainer')).toBePresent();
    });

    it('should contain a searching text', () => {
      mounted = mount(<Component {...props} isFetching={true}/>);

      expect(mounted.find('.loading')).toBePresent();
    });
  })

})
;
