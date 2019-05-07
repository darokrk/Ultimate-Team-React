import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import TeamPicker from "./TeamPicker/TeamPicker";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={TeamPicker} />
      <Route path={process.env.PUBLIC_URL + "/team/:teamId"} component={App} />
    </Switch>
  </HashRouter>
);

export default Router;
