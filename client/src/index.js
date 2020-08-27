
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import App from "./App";
import Footer from "./components/Footer";

import "./styles/app.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import InventoryItems from './components/InventoryItems';
import Warehouses from './components/Warehouses';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />

      <Route path="/" exact>
        <Redirect to="/warehouse" />
      </Route>
      <App />
      <Footer />
      <Switch>
        <Redirect path="/warehouse" to="/" />
        <Route path="/" component={App} exact />
        <Route path="/inventory" component={InventoryItems} />
        {/* <Route path="/warehouse" component={Warehouses} /> */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
