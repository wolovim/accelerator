import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';

import '../assets/stylesheets/App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h2 className="app__title">Welcome to React</h2>
        </div>

        <Card className="card">
          <CardTitle
            title="Accelerator Starter Kit"
            subtitle="A head start..."
          />
          <CardText>
            To get started, edit <code>src/App.js</code> and save to reload.
          </CardText>
        </Card>
      </div>
    );
  }
}

export default App;
