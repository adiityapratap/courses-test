import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./containers/Login";
import { isLoggedIn } from "./utils";
import LearningCenter from "./containers/LearningCenter";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authenticated = isLoggedIn() ? true : false;
console.log(authenticated, "authenticated")
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Fragment>
            <Component {...props} />
          </Fragment>
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, ...rest }) => {
  const authenticated = isLoggedIn() ? true : false;
  return (
    <Route
      {...rest}
      render={props =>
        !authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={LearningCenter} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
