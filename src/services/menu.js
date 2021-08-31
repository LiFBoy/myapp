/* eslint-disable camelcase */
import Net from '@/services';
import { url } from '@/common/container';
import { parseParam, isFilterUrlArr } from '@/common/util';
import { Modal } from 'antd';
// import mockMenu from './menu.mock';

/**
 * 获取菜单列表
 * @returns
 */
export async function getMenuData() {
  // http://perm.api.xiaoyuanhao.com/userMenu/get
  try {
    const {
      data: { menus },
    } = await Net.request(`${url.menu}/userMenu/get`);
    // const menus = mockMenu;

    if (menus.length === 0 && window.location.pathname !== '/') {
      window.location.href = '/';
    }

    let res_menu = menus.filter(({ routeSign }) => routeSign === 'v2');

    // 企微进入时会附带的路径参数parentUri
    const parentUri = parseParam()?.parentUri;

    if (parentUri) {
      res_menu = res_menu.filter(({ url1 }) => `/${parentUri?.split('/')[1]}` === url1);
      if (res_menu?.length === 0 && isFilterUrlArr(window.location.pathname)) {
        Modal.warning({
          title: '提示',
          content: '当前用户没有该应用的使用权限，请联系管理员申请权限。',
          okText: '确定',
        });
      }
    }
    return res_menu;
  } catch (e) {
    console.error(e);
    alert('页面菜单获取失败，请刷新重试。');
    return null;
  }
}
