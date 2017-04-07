import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';

// react-md utilizes Google's material icons
import WebFont from 'webfontloader';
WebFont.load({ google: { families: ['Material Icons'] } });

import './assets/stylesheets/index.scss';

// the same history instance is required in the store and ConnectedRouter
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
