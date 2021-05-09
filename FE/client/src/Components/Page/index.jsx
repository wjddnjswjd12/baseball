import React from "react";
import Home from "Components/Home";
import GamePage from "Components/GamePage";
// import { Route } from "react-router-dom";
import Router from "Router";
import Route from "Route";
import Switch from "Switch";

const Page = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/GamePage" component={GamePage} />
      </Switch>
    </Router>
  );
};

export default Page;
