import React from 'react';
import { mount, shallow } from 'enzyme';

import ListPage from './ListPage';

describe('Component: ListPage', () => {
  it('renders existing items', () => {
    const wrapper = shallow(<ListPage items={['abc', 'def']} />);

    expect(wrapper.find('ListItem').length).toEqual(2);
  });

  it('disables submit button until input has content', () => {
    const spy = jest.fn();
    const wrapper = mount(<ListPage addItem={spy} items={['abc', 'def']} />);

    expect(wrapper.find('button[disabled=true]').exists()).toBe(true);

    wrapper.find('button').simulate('click');
    expect(spy).not.toHaveBeenCalled();
  });

  it('adds new items to the list', () => {
    const spy = jest.fn();
    const wrapper = mount(<ListPage addItem={spy} items={['abc', 'def']} />);

    wrapper.setState({ text: 'new item' });
    wrapper.find('button').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
