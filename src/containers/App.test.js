import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

describe('Container: App', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a Header and two Routes', () => {
    expect(wrapper.find('withRouter(Header)').exists()).toBe(true);
  });

  it('renders two Routes', () => {
    expect(wrapper.find('Route').length).toEqual(2);
  });
});
