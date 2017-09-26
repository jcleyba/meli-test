import React from 'react';
import { shallow, mount } from 'enzyme';

import 'jest-enzyme';

import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {

  let wrapper;
  let mounted;

  const onFormSubmitSpy = jest.fn();

  const props = {
    onSubmit: jest.fn()
  };


  beforeEach(() => {
    wrapper = shallow(<SearchBar {...props}/>);
    mounted = mount(<SearchBar {...props}/>);

    mounted.instance().onFormSubmit = onFormSubmitSpy;
    mounted.update();
  });

  afterEach(() => {
    wrapper = null;
    mounted = null;

    onFormSubmitSpy.mockReset();
  });

  describe('SearchBar', () => {

    it('matches current snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should have onSubmit prop', () => {
      expect(mounted).toHaveProp('onSubmit');
    });

    it('should a term in state', () => {
      expect(mounted).toHaveState('term');
    });

    it('should have className of search-bar', () => {
      expect(wrapper).toHaveClassName('search-bar');
    });

    it('should have an input', () => {
      expect(mounted.find('input')).toBePresent();
    });

    it('should have a button', () => {
      expect(mounted.find('button')).toBePresent();
    });

    it('call function when submitted', () => {
      const preventDefault = jest.fn();
      wrapper.find('form').simulate('submit', {preventDefault});

      expect(preventDefault).toHaveBeenCalled();
    });

    it('pass value onChange to input', () => {
      wrapper.find('.search-input').simulate('change', {
        target: {
          value: 'ipad'
        }
      });

      expect(wrapper).toMatchSnapshot();
    });
  })

});
