import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Divider from 'react-md/lib/Dividers';

import '../assets/stylesheets/Home.scss';

const Home = props => {
  return (
    <Card className="card">
      <CardTitle
        title="Accelerator Starter Kit"
        subtitle="Included features..."
      />
      <Divider />
      <CardText>

        <div className="home__feature-title">React + Redux</div>
        <ul>
          <li>
            <a href="https://github.com/facebookincubator/create-react-app">
              create-react-app
            </a>
            {' '}
            - CLI tool for React apps. Configures Webpack, Babel and more.
          </li>
          <li>
            <a href="https://github.com/reactjs/redux">Redux</a>
            {' '}
            - manages complex state.
          </li>
        </ul>

        <Divider />

        <div className="home__feature-title">Testing</div>
        <ul>
          <li>
            <a href="http://facebook.github.io/jest/">
              Jest
            </a>
            {' '}
            - JavaScript testing library built on Jasmine.
          </li>
          <li>
            <a href="http://airbnb.io/enzyme/">Enzyme</a>
            {' '}
            - React component testing library.
          </li>
        </ul>

        <Divider />

        <div className="home__feature-title">Routing</div>
        <ul>
          <li>
            <a href="https://reacttraining.com/react-router/">
              React Router v4
            </a>
            {' '}
            - declarative React routes.
          </li>
          <li>
            <a
              href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux"
            >
              react-router-redux
            </a>
            {' '}
            - syncs up routing state with Redux.
          </li>
        </ul>

        <Divider />

        <div className="home__feature-title">Styling</div>
        <ul>
          <li>
            <a href="https://react-md.mlaursen.com/">
              react-md
            </a>
            {' '}
            - material design component library for React.
          </li>
          <li>
            <a href="http://sass-lang.com/">
              Sass
            </a>
            {' '}
            - css preprocessor.
          </li>
        </ul>

        <Divider />

        <div className="home__feature-title">Tooling</div>
        <ul>
          <li>
            <a href="https://github.com/prettier/prettier/">
              Prettier
            </a>
            {' '}
            - JavaScript formatter; runs prior to git commit.
          </li>
          <li>
            <a href="https://webpack.js.org/concepts/hot-module-replacement">
              Hot Module Replacement (HMR)
            </a>
            {' '}
            - updates app without refreshing or losing Redux state.
          </li>
          <li>
            <a
              href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"
            >
              Redux DevTools - Chrome extension
            </a>
            {' '}
            - view Redux store within Chrome debugging tools.
          </li>
        </ul>

      </CardText>
    </Card>
  );
};

export default Home;
