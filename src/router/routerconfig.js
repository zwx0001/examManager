import Home from "../page/home"; //首页
import Login from "../page/login"; //登录页
import List1 from "../page/list1";
import List2 from "../page/list2";
const routers = [
  {
    path: "/",
    exact: true,
    component: Login
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/exam",
    component: Home,
    child: [
      {
        path: "/exam/list1",
        component: List1
      },
      {
        path: "/exam/list2",
        component: List2
      }
    ]
  }
];

export default routers;
