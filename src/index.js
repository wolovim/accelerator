import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import WebFont from 'webfontloader';

import './assets/stylesheets/index.scss';

WebFont.load({ google: { families: ['Material Icons'] } });

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
