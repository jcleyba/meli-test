import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-enzyme';

import { ProductDetail } from '../ProductDetail';

describe('ProductDetail Component', () => {

  let wrapper;
  let mounted;

  const props = {
    match: {
      params: {
        id: 1
      }
    },
    product: {},
    isFetching: false,
    fetchItemById: jest.fn(),
    filters: []
  };


  beforeEach(() => {
    wrapper = shallow(<ProductDetail {...props}/>);
    mounted = mount(<ProductDetail {...props}/>);
  });

  afterEach(() => {
    wrapper = null;
    mounted = null;
  });

  describe('ProductDetail', () => {

    it('matches current snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should have isFetching prop', () => {
      expect(mounted).toHaveProp('isFetching');
    });

    it('should have product prop', () => {
      expect(mounted).toHaveProp('product');
    });

    it('should have a product-detail className present', () => {
      expect(mounted.find('.product-detail')).toBePresent();
    });

    it('should have a left section present', () => {
      expect(mounted.find('.left')).toBePresent();
    });

    it('should have a right section present', () => {
      expect(mounted.find('.right')).toBePresent();
    });

    it('should contain a product image', () => {
      expect(mounted.find('.product-pic')).toBePresent();
    });

    it('should contain a product price', () => {
      expect(mounted.find('.item-price')).toBePresent();
    });
  })

})
;
