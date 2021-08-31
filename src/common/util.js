/* eslint-disable no-restricted-properties */
/* eslint-disable no-restricted-globals */
// 常用工具方法集合
// @author Pluto <huarse@gmail.com>
// @create 2017/03/07

import store from 'store2';

export { logger, random, uuid, isEmpty, serialize, parseJSON } from '@irim/saber';

export function pushHistory(targetUrl) {
  history.pushState(null, targetUrl, targetUrl);
}

/**
 * 解析URL search
 * @param  {string}  [str]      要解析的字符串
 * @param  {Boolean} [isDecode=true] 是否decode
 * @return {object}
 * @example
 * parseParam('aaa=1&bbb=2&ccc=3'); // { aaa: '1', bbb: '2', ccc: '3' }
 */
export function parseParam(str = location.search, isDecode = true) {
  const ary = str.split(/[?&]/);
  const result = {};
  for (let i = 0, j = ary.length; i < j; i++) {
    const n = ary[i];
    if (!n) continue;
    const tmp = n.split('=');
    result[tmp[0]] = isDecode && !!tmp[1] ? decodeURIComponent(tmp[1]) : tmp[1];
  }
  return result;
}

/**
 * 解析cookie
 * @return {object}
 */
export function parseCookie() {
  const cookieStr = window.document ? document.cookie : '';
  const cookieAry = cookieStr.split(/\s?;\s?/);
  const cookieMap = {};
  cookieAry.forEach(function (x) {
    const i = x.indexOf('=');
    if (i >= 0) {
      cookieMap[x.substring(0, i)] = x.substring(i + 1);
    }
  });
  return cookieMap;
}

/**
 * 从对象中解析出想要的值
 * @param {object} obj object
 * @param {string} key keys
 * @example
 * parseValue({ a: [{ b: 100 }] }, 'a.0.b'); // 100
 */
export function parseValue(obj, key) {
  if (!obj) return undefined;

  const keys = key.split('.');
  return keys.reduce((prev, curr) => {
    return (prev && prev[curr]) || undefined;
  }, obj);
}

let SEED = Math.round(Date.now() * Math.random());

/** 返回一个唯一的key */
export function uniqueKey() {
  return `CC${(SEED++).toString(36).toUpperCase()}`;
}

/**
 * 保留几位小数点
 * @param {number} num
 * @param {number} [unit=2]
 */
export function toFixed(num, fix = 2) {
  const unit = Math.pow(10, fix);
  return Math.round(num * unit) / unit;
}

// 复制文本到剪贴板
export function copy2Clipboard(text) {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    input.value = text;
    document.body.appendChild(input);
    input.select();

    document.execCommand('copy') ? resolve(true) : reject(false);
    document.body.removeChild(input);
  });
}

/** 字符串排序 */
export function compare4ASCII(a, b) {
  if (!a && !b) return 0;
  // if (!isNaN(a) && !isNaN(b)) return a - b;
  if (typeof a === 'number' && typeof b === 'number') return a - b;

  // 没有内容应该放最后
  if (!a) return -1;
  if (!b) return 1;
  if (a === b) return 0;

  const aIsEN = /^[\w\s]+$/.test(a);
  const bIsEN = /^[\w\s]+$/.test(b);

  if (aIsEN && bIsEN) return a > b ? 1 : -1;
  if (aIsEN && !bIsEN) return -1;
  if (!aIsEN && bIsEN) return 1;

  if (String.prototype.localeCompare) {
    return String.prototype.localeCompare.call(a, b, 'zh');
  }

  return a > b ? 1 : -1;
}

export function getMenuData(routerMap, parentPath = '') {
  let routes = routerMap;
  if (routerMap['/']) {
    routes = routerMap['/'].children;
  }
  const menu = Object.keys(routes).map((path) => {
    const result = {
      path: parentPath + path,
      name: routes[path].name,
      icon: routes[path].icon,
      authority: routes[path].authority,
      hidden: routes[path].hidden,
    };
    if (routes[path].children) {
      result.children = getMenuData(routes[path].children, path);
    }
    return result;
  });
  return menu;
}

export function getRouterData(routerMap) {
  const flattenRoute = flatten(routerMap);
  const routes = Object.keys(flattenRoute).map((path) => flattenRoute[path]);
  return routes;
}

function flatten(routerMap, parentPath = '') {
  let routes = {};
  Object.keys(routerMap).forEach((path) => {
    routes[path] = {
      path: parentPath + path,
      key: path,
      name: routerMap[path].name,
      exact: routerMap[path].exact || true,
      component: routerMap[path].component,
    };
    if (routerMap[path].children) {
      routes = {
        ...routes,
        ...flatten(routerMap[path].children, path === '/' ? '' : path),
      };
    }
  });
  return routes;
}

export function isFilterUrlArr(url) {
  const noFilterUrlArr = [
    '/v2/preview/file',
    '/readStatistics/readDetail',
    '/settings-v1/manage-tool',
    '/workFlow/listDetail/statisticalData/dataDetail',
  ];
  return (noFilterUrlArr.filter((item) => url.indexOf(item) !== -1) || []).length === 0;
}

// 非制定地址访问时，根据当前orgid配置的学校对应系统版本进行重定向
export function funVerifySuccess() {
  return (
    ['iframe', 'oa', 'RDP-SERVER', 'msgsend'].filter(
      (item) => window.location.pathname.indexOf(item) !== -1,
    ).length > 0
  );
}

export const ENV = (document.querySelector('meta[name="x-server-env"]') || { content: 'dev' })
  .content;

// 获取当前日期
export const getNowDate = () => {
  const nowDate = new Date();
  return `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`;
};

// 生成“升班提示标识key”
export const getGoUpKey = () => {
  const currentUser = store.session('currentUser');
  return `GoUpClass-${currentUser?.userInfo?.userId}-${currentUser?.orgId}`;
};
