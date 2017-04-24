import items from './reducer';

describe('items reducer', () => {
  const initialState = { list: [] };

  it('handles default state', () => {
    const action = {};

    expect(items(undefined, {})).toEqual(initialState);
  });

  it('handles ADD_ITEM action', () => {
    const action = { type: 'ADD_ITEM', text: 'zoop' };

    expect(items(initialState, action)).toEqual({ list: ['zoop'] });
  });
});
