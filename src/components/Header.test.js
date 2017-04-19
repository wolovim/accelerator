import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('Component: Header', () => {
  const wrapper = shallow(<Header />);

  it('renders a Toolbar', () => {
    expect(wrapper.find('Toolbar').exists()).toBe(true);
  });

  it('renders a title', () => {
    expect(wrapper.find('h2').text()).toBe('Redux Accelerator');
  });

  it('renders an icon', () => {
    expect(wrapper.find('img[src="logo.svg"]').exists()).toBe(true);
  });
});
