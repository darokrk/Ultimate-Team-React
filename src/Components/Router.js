import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import TeamPicker from "./TeamPicker/TeamPicker";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={TeamPicker} />
      <Route path="/team/:teamId" component={App} />
    </Switch>
  </HashRouter>
);

export default Router;
