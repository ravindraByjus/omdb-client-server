import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Route, Router, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import { createBrowserHistory } from "history";
import BookTheShow from "./components/BookTheShow";
import Header from "./components/Header";

const history = createBrowserHistory();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/BookTheShow/:movieId" component={BookTheShow} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  rootElement
);
