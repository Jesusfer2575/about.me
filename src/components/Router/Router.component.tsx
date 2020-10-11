import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { About } from '../../pages/About';
import Layout from '../Layout/Layout';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route component={About} path="/about" exact />
        <Route component={Home} path="/" />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default Router;
