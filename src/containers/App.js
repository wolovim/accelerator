import React, { Component, PropTypes } from 'react';
import logo from '../assets/images/logo.svg';
import Button from 'react-md/lib/Buttons';
import Toolbar from 'react-md/lib/Toolbars';
import { Route } from 'react-router-dom';

import About from '../components/About';
import Home from '../components/Home';
import '../assets/stylesheets/App.scss';

class App extends Component {
  redirectTo(route) {
    return this.context.router.history.push(route);
  }

  render() {
    const actions = [
      <Button icon key="home" onClick={() => this.redirectTo('/')}>
        home
      </Button>,
      <Button icon key="about" onClick={() => this.redirectTo('/about')}>
        library_books
      </Button>,
    ];

    return (
      <div className="app">
        <Toolbar
          actions={actions}
          themed
          nav={<Button key="nav" icon>menu</Button>}
          title="Accelerator"
        />
        <div className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h2 className="app__title">Redux Accelerator</h2>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    );
  }

  // if accessing context is used, contextTypes must be specified
  static contextTypes = {
    router: PropTypes.object,
  };
}

export default App;
