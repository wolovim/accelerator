import React from 'react';
import ReactDOM from 'react-dom';
//import Root from './containers/Root';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './containers/App';

// react-md utilizes Google's material icons
import WebFont from 'webfontloader';
WebFont.load({ google: { families: ['Material Icons'] } });

import './assets/stylesheets/index.scss';

// the same history instance is required in the store and ConnectedRouter
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
const store = configureStore(history);

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
}

render(App);

// In development, react hot loading updates the application when
// changes are made, but maintains the application state.
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(NextApp);
  });
}
