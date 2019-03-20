import { goloading } from "../server";
import { message } from "antd";
export default {
  namespace: "load",
  state: "",
  reducers: {
    updata(state, { payload }) {
      return payload;
    }
  },
  effects: {
    *goload({ payload }, { call, put }) {
      let { callback } = payload;
      let data = yield call(goloading, payload);
      if (data.code && data.code === 1) {
        document.cookie = "token=" + data.token;
        yield put({
          type: "updata",
          payload: data.token
        });
        callback();
      } else {
        message.error(data.msg);
      }
    }
  }
};
