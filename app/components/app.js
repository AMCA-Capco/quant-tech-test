/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import Header from 'components/header';
import HomePage from 'components/homepage/homepage.container';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="Quantifeed Tech Test"
      defaultTitle="Quantifeed Tech Test"
    >
      <meta name="description" content="Quantifeed Tech Test" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
