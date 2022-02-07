import request from './request';
import { getItem, isBrowser, removeItem, setItem } from '../utils/util';
const auth = 'authorization';

export async function login(loginId, loginPwd) {
  const resp = await request.post('/api/user/login', {
    loginId,
    loginPwd,
  });
  if (resp.data.code === 0) {
    // 登录成功
    const token = resp.headers[auth];
    setItem('token', token);
  } else {
    removeItem('token');
  }
  return resp.data;
}

export async function whoAmI() {
  const token = getItem('token');
  if (!token) {
    return {
      code: 0,
      message: '',
      data: null,
    };
  }
  const resp = await request.get('/api/user/whoami', {
    headers: {
      [auth]: token,
    },
  });
  if (!resp.data.data) {
    removeItem('token');
  }
  return resp.data;
}

export async function loginOut() {
  removeItem('token');
}
