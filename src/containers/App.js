import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router';

import { addItem } from '../store/items/actions';
import Header from '../components/Header';
import ListPage from '../components/ListPage';
import Home from '../components/Home';
import '../assets/stylesheets/App.scss';

export class App extends Component {
  handleAddItem(text) {
    this.props.dispatch(addItem(text));
  }

  render() {
    return (
      <div className="app">
        <Header />

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

App.propTypes = {
  dispatch: PropTypes.func,
  items: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    items: state.items.list,
  };
}

export default withRouter(connect(mapStateToProps)(App));
