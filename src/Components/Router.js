import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import TeamPicker from "./TeamPicker/TeamPicker";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={TeamPicker} />
      <Route path={process.env.PUBLIC_URL + "/team/:teamId"} component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
