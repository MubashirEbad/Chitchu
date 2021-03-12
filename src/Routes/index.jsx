import React from "react";
import SignIn from "./Signin";
import HomePage from './Dashboard';
import { Switch, Route } from "react-router-dom";

const RoutesWrapper = () => {
  return (
    <Switch>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      {/* <Route path="/signin" component={SignIn} />
        <Route path="/" component={HomePage} />
        <Route path="/home" component={HomePage} /> */}
    </Switch>
  );
};

export default RoutesWrapper;
