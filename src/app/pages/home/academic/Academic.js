import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Studyplan from './Studyplan';
import StudyResult from './StudyResult';
import Transkrip from './Transkrip';

export default function Academic() {
  return (<Switch>
    <Redirect
      exact={true}
      from="/academic"
      to="/academic/studyplan"
    />
    <Route
      path="/academic/studyplan"
      component={Studyplan}
    />
    <Route
      path="/academic/studyresult"
      component={StudyResult}
    />
    <Route
      path="/academic/transkrip"
      component={Transkrip}
    />
  </Switch>)
}