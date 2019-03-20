import http from "../utils/http";
//所有的数据请求
export function goloading({ url, params }) {
  return http.post(url, params);
}
