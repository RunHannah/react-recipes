import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Recipe from "./recipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Router path="/recipe/:id" component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
