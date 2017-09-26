import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-enzyme';
import { MemoryRouter } from 'react-router-dom';

import ListItem from '../ListItem';

describe('List Item Component', () => {

  let wrapper;
  let mounted;

  const props = {
    itemData: {
      id: 1,
      title: 'Name',
      price: {
        amount: 10
      },
      address: {
        state_name: 'Cordoba'
      }
    },
  };


  const Component = (props) => {
    return <MemoryRouter>
      <ListItem {...props}/>
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

  describe('List Item', () => {

    it('matches current snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should have itemData prop', () => {
      expect(mounted).toHaveProp('itemData');
    });

    it('should have a breadcrumbs className', () => {
      expect(mounted.find('.list-item')).toBePresent();
    });

    it('should have title same as prop', () => {
      expect(mounted.find('.title a').text()).toEqual(props.itemData.title);
    });

    it('should render a title as link', () => {
      expect(mounted.find('.title a')).toBePresent();
    });

    it('should render a thumbnail as link', () => {
      expect(mounted.find('.thumbnail a')).toBePresent();
    });

    it('should have a thumbnail className', () => {
      expect(mounted.find('.thumbnail')).toBePresent();
    });

    it('should render a description', () => {
      expect(mounted.find('.description')).toBePresent();
    });

    it('should render the name of location', () => {
      expect(mounted.find('.location').text()).toEqual(props.itemData.address.state_name);
    });
  });
})
;
