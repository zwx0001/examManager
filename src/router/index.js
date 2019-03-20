import React from "react";
import { Router, Switch } from "dva/router";
import RouterView from "./maprouter";
import routers from "./routerconfig";
function Routerview({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <RouterView routers={routers} />
      </Switch>
    </Router>
  );
}
export default Routerview;
