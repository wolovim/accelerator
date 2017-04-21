import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import items from './items/reducer';

const root = combineReducers({
  items,
  router: routerReducer,
});

export default root;
