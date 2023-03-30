import React from "react";
import { Switch, Route } from "react-router-dom";
import UserProfile from "../dashboard/UserProfile";
import UserDashboard from "../dashboard/UserDashboard";
import Notfound from "../container/Notfound";
import Unverfied from "../pages/Unverfied";
import Plans from "../pages/Plans";

export default function PrivateRoute() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <UserDashboard />
        </Route>
        <Route path="/userprofile">
          <UserProfile />
        </Route>
        <Route path="/unverified">
          <Unverfied />
        </Route>
        <Route path="/select-plans">
          <Plans />
        </Route>
      </Switch>
    </>
  );
}
