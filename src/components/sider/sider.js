import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "dva/router";
import "./sider.css";

const SubMenu = Menu.SubMenu;

class Siders extends React.Component {
  rootSubmenuKeys = ["sub1", "sub2", "sub4", "sub5"];

  state = {
    openKeys: ["sub1"]
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {
    return (
      <div className="z_menu">
        <Menu
          theme="dark"
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="form" />
                <span>试题管理</span>
              </span>
            }
          >
            <Menu.Item key="1">添加试题</Menu.Item>
            <Menu.Item key="2">试题分类</Menu.Item>
            <Menu.Item key="3">查看试题</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="form" />
                <span>用户管理</span>
              </span>
            }
          >
            <Menu.Item key="4">添加用户</Menu.Item>
            <Menu.Item key="5">用户展示</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="profile" />
                <span>考试管理</span>
              </span>
            }
          >
            <Menu.Item key="6">添加考试</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Siders;
