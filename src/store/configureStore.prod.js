import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import root from '../reducers/';

export default function configureStore() {
  return createStore(
    root,
    applyMiddleware(thunk, routerMiddleware(createBrowserHistory()))
  );
}
