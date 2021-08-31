import React from 'react';
import { Spin, Menu, Avatar, Modal, Dropdown, message } from 'antd';
import { handleUserAgent, gotoLogin } from '@/common/container';
import { request } from 'umi';

import styles from './index.less';

export const logout = async () => {

  return request('https://community-dev.easyj.top/auth/oauth/logout', {
    method: 'POST',
    headers: {
      // Authorization: window.Authorization
      Authorization: `Bearer ${window.token}`,
    },

  });



  // await Net.request(`${url.auth}/oauth/logout`, {
  //   method: 'POST',
  // });
  // message.config({
  //   prefixCls: 'nbugs-container-message',
  // });
  // message.success('退出成功');
  // gotoLogin();
};

export default function HeaderRight(props) {
  const { currentUser = {}, schools = [], isContact } = props;

  const isWxwork = handleUserAgent();

  const handleMenuClick = ({ key }) => {
    if (key === 'selectSchool') {
      gotoLogin('', !0);
      return;
    }
    if (key === 'logout') {
      Modal.confirm({
        title: '是否确认退出平台',
        okText: '确认',
        cancelText: '取消',
        onOk: async () => {
        await logout();
  //           message.config({
  //   prefixCls: 'ss-container-message',
  // });
  message.success('退出成功');
  gotoLogin();
        },
        onCancel() {
          // eslint-disable-next-line no-console
          console.log('Cancel');
        },
      });
    }
  };

  const menu = !isWxwork ? (
    <Menu className={styles.menu} selectedKeys={[]} onClick={handleMenuClick}>
      {schools && schools.length >= 2 ? (
        <Menu.Item key="selectSchool">身份切换</Menu.Item>
      ) : (
        ''
      )}
      <Menu.Item key="logout">退出登录</Menu.Item>
    </Menu>
  ) : null;
  return currentUser.name ? (
    <Dropdown overlay={menu}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar
          size="small"
          className={styles.avatar}
          src={currentUser.avatar}
          alt="avatar"
        />

        <span className={styles.name}>
          {Number(isContact) === 0 ? currentUser.name : '退出'}
        </span>
      </span>
    </Dropdown>
  ) : (
    <Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />
  );
}
