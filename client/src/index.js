import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import InventoryItems from './components/InventoryItems';
import Warehouses from './components/Warehouses';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Redirect path="/home" to="/" />
        <Route path="/" component={App} exact />
        <Route path="/inventory" component={InventoryItems} />
        <Route path="/warehouse" component={Warehouses} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
