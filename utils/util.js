/**
 * 是否是浏览器
 */
export function isBrowser() {
  return typeof window !== 'undefined';
}

/**
 * 设置localStorage
 * @param {*} key
 * @param {*} value
 */
export function setItem(key, value) {
  if (isBrowser()) {
    localStorage.setItem(key, value);
  }
}

/**
 * 获取localStorage
 * @param {*} key
 */
export function getItem(key) {
  if (isBrowser()) {
    return localStorage.getItem(key);
  }
}

/**
 * 移除localStorage
 * @param {*} key
 */
export function removeItem(key) {
  if (isBrowser()) {
    localStorage.removeItem(key);
  }
}
