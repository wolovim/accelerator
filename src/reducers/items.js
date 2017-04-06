const initialState = {
  list: [],
};

function items(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return Object.assign({}, state, {
        list: state.list.concat(action.text),
      });
    default:
      return state;
  }
}

export default items;
