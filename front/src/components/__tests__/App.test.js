import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-enzyme';

import App from '../App';

describe('App Component', () => {

  let wrapper;
  let mounted;

  const props = {}

  beforeEach(() => {
    wrapper = shallow(<App {...props}/>);
    mounted = mount(<App {...props}/>);
  });

  afterEach(() => {
    wrapper = null;
    mounted = null;
  });

  describe('App', () => {

    it('matches current snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should have main title', () => {
      expect(mounted.find('h1')).toBePresent();
    });

    it('should have main className', () => {
      expect(mounted.find('.main')).toBePresent();
    });
  })

})
;
