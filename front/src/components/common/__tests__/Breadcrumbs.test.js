import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-enzyme';

import Breadcrumbs from '../Breadcrumbs';

describe('Breadcrumbs Component', () => {

  let wrapper;
  let mounted;

  const props = {
    pathFromRoot: [{
      id: 1,
      name: 'Name',
    }],
  };


  beforeEach(() => {
    wrapper = shallow(<Breadcrumbs {...props}/>);
    mounted = mount(<Breadcrumbs {...props}/>);
  });

  afterEach(() => {
    wrapper = null;
    mounted = null;
  });

  describe('Breadcrumbs', () => {

    it('matches current snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should have pathFromRoot prop', () => {
      expect(mounted).toHaveProp('pathFromRoot');
    });

    it('should have a breadcrumbs className', () => {
      expect(mounted.find('.breadcrumbs')).toBePresent();
    });

    it('should render an ordered list', () => {
      expect(mounted.find('ol')).toBePresent();
    });

    it('should render at least one li item', () => {
      expect(mounted.find('li')).toBePresent();
    });

    it('should have a breadcrumb on li items className', () => {
      expect(mounted.find('li.breadcrumb')).toBePresent();
    });

    it('should render at least one chevron item', () => {
      expect(mounted.find('.chevron img')).toBePresent();
    });

    it('should render the name of pathFromRoot array', () => {
      expect(mounted.find('.name').text()).toEqual(props.pathFromRoot[0].name)
    });
  });
})
;
