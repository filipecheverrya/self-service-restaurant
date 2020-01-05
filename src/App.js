import React from 'react';
import { Switch, withRouter, Route,  } from 'react-router-dom';
import Home from './components/pages/home.js';
import Products from './components/pages/product-list.js';
import Checkout from './components/pages/checkout.js';
import Success from './components/pages/success.js';
import { App, GlobalStyle } from './style-base';

function Root(props) {
  return (
    <App>
      <GlobalStyle />
      <Switch>
  
        <Route path="/product/:id" children={props => <Products data={props} isDrinks />} />
        <Route path="/product" children={props => <Products data={props} />} />
        <Route path="/checkout" children={props => <Checkout data={props} />} />
        <Route path="/success" children={props => <Success data={props} />} />
        <Route path="/" children={props => <Home data={props} />} />

      </Switch>
    </App>
  );
}

export default withRouter(Root);