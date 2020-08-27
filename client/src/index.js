import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import App from "./App";
import Footer from "./components/Footer";

import "./styles/app.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route path="/" exact>
        <Redirect to="/warehouse" />
      </Route>
      <App />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
