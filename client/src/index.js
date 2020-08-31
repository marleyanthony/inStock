import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import App from "./App";
import Footer from "./components/Footer";
import newWarehouse from "./components/newWarehouse";
import "./styles/app.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="background">
        <Header />
        <Route path="/" exact>
          <Redirect to="/warehouse" />
        </Route>
        <Route path="/newwarehouse" component={newWarehouse} />
        <App />
        <Footer />
        <Route path="/*" to="/warehouse" />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
