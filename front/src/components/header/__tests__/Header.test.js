import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-enzyme';
import { MemoryRouter } from 'react-router-dom';

import { Header } from '../Header';

describe('Header Component', () => {

  let wrapper;
  let mounted;

  const props = {
    fetchItems: jest.fn(),
    location: {
      search: ''
    }
  };

  const Component = (props) => {
    return <MemoryRouter>
      <Header {...props}/>
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

  describe('Header', () => {

    it('matches current snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should have fetchItems prop', () => {
      expect(mounted).toHaveProp('fetchItems');
    });

    it('should have a logo present', () => {
      expect(mounted.find('.logo')).toBePresent();
    });

    it('should contain a SearchBar', () => {
      expect(mounted.find('SearchBar')).toBePresent();
    });
  })

});
