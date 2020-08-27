import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Header from "./components/Header";
import App from "./App";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Redirect path="/" to="/warehouse" />
      <App />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
