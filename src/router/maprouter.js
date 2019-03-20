import React, { Component } from "react";
import { Route } from "dva/router";
class RouterView extends Component {
  render() {
    return (
      this.props.routers &&
      this.props.routers.map((item, index) => (
        <Route
          exact={item.exact}
          path={item.path}
          render={match => <item.component {...match} routers={item.child} />}
          key={index}
        />
      ))
    );
  }
}

export default RouterView;
