const initialState = {
  loading: '',
  exampleContents: [],
};

function example(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_EXAMPLE__REQUEST':
      return Object.assign({}, state, {
        loading: true,
        exampleContents: [],
      });
    case 'FETCH_EXAMPLE__SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        exampleContents: action.exampleContents,
      });
    case 'FETCH_EXAMPLE__FAILURE':
      return Object.assign({}, state, {
        loading: false,
        exampleContents: [],
      });
    default:
      return state;
  }
}

export default example;
