import { Spin } from "antd";
import "./spin.css";
import React, { Component } from "react";

class Spining extends Component {
  render() {
    return this.props.loading ? (
      <div className="mask">
        <Spin spinning={this.props.loading} tip="Loading..." />
      </div>
    ) : null;
  }
}

export default Spining;
