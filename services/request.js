import axios from 'axios';
import cookie from 'cookie';

let instance;
if (typeof window === 'undefined') {
  // 服务器
  instance = getServerInstance();
} else {
  // 浏览器
  instance = axios.create();
}

// 浏览器 -- > next.js -- > 数据服务器
// next.js -- > 数据服务器
// 浏览器 -- > 数据服务器

// const instance = axios.create(config);

export default instance;

export function getServerInstance(req) {
  const config = {
    baseURL: 'http://yuanjin.tech:5100/',
  };
  if (req) {
    const cookies = req.headers['cookie'];
    const cookieObj = cookie.parse(cookies);
    if (cookieObj.token) {
      config.headers = {
        authorization: cookieObj.token,
      };
    }
  }

  return axios.create(config);
}
