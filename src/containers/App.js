import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import Button from 'react-md/lib/Buttons';
import Toolbar from 'react-md/lib/Toolbars';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router';
import { push } from 'react-router-redux';

import { addItem } from '../actions/items';
import ListPage from '../components/ListPage';
import Home from '../components/Home';
import '../assets/stylesheets/App.scss';

export class App extends Component {
  redirectTo(route) {
    // In React Router v4, this is one way to programmatically redirect
    // a user using react-router-redux. Other couple solutions:
    //  1. Using `withRouter`: this.props.history.push(route);
    //  2. Accessing context: this.context.router.history.push(route);
    return this.props.dispatch(push(route));
  }

  handleAddItem(text) {
    this.props.dispatch(addItem(text));
  }

  render() {
    const actions = [
      <Button icon key="home" onClick={() => this.redirectTo('/')}>
        home
      </Button>,
      <Button icon key="list" onClick={() => this.redirectTo('/list')}>
        list
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
        <Route
          path="/list"
          component={() => {
            return (
              <ListPage
                items={this.props.items}
                addItem={text => this.handleAddItem(text)}
              />
            );
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items.list,
  };
}

// 'withRouter' makes router state available to the wrapped component.
// See: https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(connect(mapStateToProps)(App));
