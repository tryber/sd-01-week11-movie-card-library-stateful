import React from 'react'
import { shallow } from 'enzyme';

import Rating from './Rating';

describe('<Rating /> component', () => {
  it.skip('renders without crashing', () => {
    shallow(<Rating />);
  });

  it.skip('renders the rating inside an element with the class `rating`', () => {
    const wrapper = shallow(<Rating rating={3} />);

    expect(wrapper.find('.rating').text()).toEqual('3');
  });
});
