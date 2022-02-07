import axios from 'axios';

const config = {};

if (typeof window === 'undefined') {
  // 服务器
  config.baseURL = 'http://yuanjin.tech:5100/';
} else {
  // 浏览器
  config.baseURL = 'http://yuanjin.tech:5100/';
}

// 浏览器 -- > next.js -- > 数据服务器
// next.js -- > 数据服务器
// 浏览器 -- > 数据服务器

const instance = axios.create(config);

export default instance;
