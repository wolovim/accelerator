import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';

describe('Component: Home', () => {
  it('renders five feature groups', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find('.home__feature-title').length).toEqual(5);
  });
});
