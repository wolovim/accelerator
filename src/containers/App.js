import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import Button from 'react-md/lib/Buttons';
import Toolbar from 'react-md/lib/Toolbars';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { addItem } from '../actions/items';
import ListPage from '../components/List';
import Home from '../components/Home';
import '../assets/stylesheets/App.scss';

class App extends Component {
  redirectTo(route) {
    // In react-router v4, this is a programmatic way to redirect a user.
    // Note that 'history' is available thanks to 'withRouter'.
    return this.props.history.push(route);
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

    console.log('this.props.items', this.props.items);
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
    router: state.router,
  };
}

// 'withRouter' makes router state available to the wrapped component.
// See: https://reacttraining.com/react-router/web/api/withRouter
export default connect(mapStateToProps)(withRouter(App));
