import React, { Component } from "react";
import "./index.css";
import WrappedNormalLoginForm from "../../components/form/form";
import { connect } from "dva";
import { message } from "antd";
import Spining from "../../components/spin/spin";
class Login extends Component {
  render() {
    let { loading } = this.props;
    return (
      <div className="login">
        <div className="form">
          <WrappedNormalLoginForm gohome={this.gohome} />
        </div>
        <Spining loading={loading.global} />
      </div>
    );
  }
  gohome = (userName, password) => {
    if (userName.trim() && password.trim()) {
      let { goload } = this.props;
      let that = this;
      goload(
        "/user/login",
        { user_name: userName, user_pwd: password },
        function() {
          message.success("登录成功！");
          that.props.history.push("/exam");
        }
      );
      // http
      //   .post("/user/login", {
      //     //登录接口的请求
      //     user_name: userName,
      //     user_pwd: password
      //   })
      //   .then(data => {
      //     if (data.code && data.code === 1) {
      //       document.cookie = "token=" + data.token;
      //       message.info("登录成功!");
      //       setTimeout(() => {
      //         this.props.history.push("/exam");
      //       }, 1000);
      //     }
      //   })
      //   .catch(err => {
      //     message.info("账号或密码不正确,登录失败!");
      //   });
    }
  };
}
export default connect(
  state => {
    return {
      loading: state.loading,
      load: state.load
    };
  },
  dispatch => {
    return {
      goload: (url, params, callback) => {
        dispatch({
          type: "load/goload",
          payload: {
            url,
            params,
            callback
          }
        });
      }
    };
  }
)(Login);
