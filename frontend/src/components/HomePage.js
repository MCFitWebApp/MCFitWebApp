import React, { Component } from "react";
import exercisePage from "./exercisePage";
import clientexercise from "./clientexercise"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <p>This is the home page</p>
          </Route>
          <Route path="/trainer" component={exercisePage} />
          <Route path="/client" component={clientexercise} />
        </Switch>
      </Router>
    );
  }
}