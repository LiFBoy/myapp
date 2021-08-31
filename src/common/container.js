import { history } from 'umi';
// 若是企微内核浏览器 => 若是mac或windows系统浏览 返回true
export const handleUserAgent = () => {
  const ua = navigator.userAgent;
  return /micromessenger|wxwork/i.test(ua) && /mac|windows/i.test(ua);
};

export const ENV = (document.querySelector('meta[name="x-server-env"]') || { content: 'dev' })
  .content;

const urlCollect = {
  // 测试环境
  test: {
    auth: 'https://community-dev.easyj.top/auth',
  },
  // 生产环境
  production: {
    auth: 'https://community-dev.easyj.top/auth',
  },
};

// 开发环境基本不用，直接映射成测试环境
urlCollect.dev = urlCollect.test;

export const url = urlCollect[ENV];

/**
 * 接口302或需要切换组织时跳转
 * @param {*} callbackUrl 当前页面url，不传则会取「window.location.origin」
 * @param {*} isSelect 控制进入登陆或切换身份，不传则进登陆界面，传入true则进入身份切换列表
 */
// export const gotoLogin = (callbackUrl, isSelect) => {
//   window.location.href = `http${
//     ENV === 'production' ? 's://login' : '://login-test'
//   }.xiaoyuanhao.com/${!isSelect ? 'user/login' : 'select'}?destination=${encodeURIComponent(
//     `${callbackUrl || window.location.origin}/`,
//   )}`;
// };

export const gotoLogin = (callbackUrl, isSelect) => {
  history.push('/user/login');
  // debugger;
  // window.location.href = `${window.location.host}/user/login`;
  // window.location.href = `http${
  //   ENV === 'production' ? 's://login' : '://login-test'
  // }.xiaoyuanhao.com/${!isSelect ? 'user/login' : 'select'}?destination=${encodeURIComponent(
  //   `${callbackUrl || window.location.origin}/`,
  // )}`;
};
