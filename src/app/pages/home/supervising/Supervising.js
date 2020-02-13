import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import History from './History';
import FormSupervising from './FormSupervising';

export default function Supervising() {
  return (<Switch>
    <Redirect
      exact={true}
      from="/supervising"
      to="/supervising/history"
    />
    <Route
      path="/supervising/history"
      component={History}
    />
    <Route
      path="/supervising/form"
      component={FormSupervising}
    />

  </Switch>)
}