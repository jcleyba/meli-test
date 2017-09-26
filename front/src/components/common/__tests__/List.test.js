import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-enzyme';
import { MemoryRouter } from 'react-router-dom';

import ListContainer from '../List';

describe('List Container', () => {

  let wrapper;
  let mounted;

  const props = {
    products: [{
      id: 1,
      title: 'Name',
      price: {
        amount: 10
      },
      address: {
        state_name: 'Cordoba'
      }
    }],
  };

  const Component = (props) => {
    return <MemoryRouter>
      <ListContainer {...props}/>
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

  describe('List Container', () => {

    it('matches current snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should have products prop', () => {
      expect(mounted).toHaveProp('products');
    });

    it('should have a list-container className', () => {
      expect(mounted.find('.list-container')).toBePresent();
    });

    it('should have at least one ListItem', () => {
      expect(mounted.find('ListItem')).toBePresent();
    });
  });
})
;
