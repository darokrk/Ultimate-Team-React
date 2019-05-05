import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import TeamPicker from "./TeamPicker/TeamPicker";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/Ultimate-Team-React/" component={TeamPicker} />
      <Route path="/Ultimate-Team-React/team/:teamId" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
