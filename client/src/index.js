import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"
import Rate from "./components/Rate"
import Card from "./components/Card"

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
let jsx = (
    <Router>
    <Switch>
        <Route path="/rate_us">
            <Rate />
          </Route>
          <Route path="/game">
            <Card />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
    </Router>
);

ReactDOM.render(jsx, document.getElementById("root"));