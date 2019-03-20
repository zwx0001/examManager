import React, { Component } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import Siders from "../../components/sider/sider";
import hoc from "../../hoc";
import http from "../../utils/http";
import RouterView from "../../router/maprouter";

const { Header, Content, Sider } = Layout;

class Home extends Component {
  state = {
    user_name: "用户名"
  };
  render() {
    return (
      <div className="home">
        <Layout>
          <Header>
            <img src="/login.png" alt="" />
            <p>
              <i>
                <img src="/u=681742560,2937733854&fm=26&gp=0.jpg" alt="" />
              </i>
              <span>{this.state.user_name}</span>
            </p>
          </Header>
          <Layout>
            <Sider>
              <Siders />
            </Sider>
            <Content>{<RouterView routers={this.props.routers} />}</Content>
          </Layout>
        </Layout>
      </div>
    );
  }
  componentDidMount() {
    let that = this;
   
    http.get("/user/userInfo").then(data => {
      if (data.code === 1) {
        that.setState({
          user_name: data.data.user_name
        });
        if (data.data.identity_text === "管理员") {
         
            this.props.history.push("/exam/list1");
         
        } else if (data.data.identity_text === "出题者") {
         
            this.props.history.push("/exam/list2");
         
        } else {
        }
      }
    });
  }
}

export default hoc(Home);
