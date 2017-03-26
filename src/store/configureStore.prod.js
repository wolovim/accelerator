import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import root from '../reducers';

export default function configureStore() {
  return createStore(root, applyMiddleware(thunk));
}
