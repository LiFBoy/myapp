/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { Layout, ConfigProvider, message } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { LogoutOutlined } from '@ant-design/icons';
import GlobalHeader from '@/components/global-header';
// import { getNowDate, getGoUpKey } from '@/common/util';
import { ALL_SCREEN } from '../../micro-app.config';
import { history } from 'umi';

import './BaseLayout.less';

const { Content } = Layout;

const avatarMenu = [
  {
    title: '退出登录',
    key: 'logout',
    icon: <LogoutOutlined />,
  },
];

const MainContainerLayout = (props) => {
  const { loading, setGlobalState, currentUser, schools, isContact } = props;
  const menus = [
    {
      belongDefault: true,
      icon: '',
      img: 'https://jybxiaochong.oss-cn-hangzhou.aliyuncs.com/3reIfQzKdf79Wrc2nT8JGl.png',
      isAvailable: true,
      menuId: 1374,
      menuName: '工作流2.0',
      parentMenuId: 0,
      routeSign: 'v2',
      shortcut: false,
      sortNum: 31,
      subMenus: [
        {
          belongDefault: true,
          icon: 'survey-statistics',
          img: 'wu',
          isAvailable: true,
          menuId: 1376,
          menuName: '应用列表',
          parentMenuId: 1374,
          routeSign: 'v2',
          shortcut: false,
          sortNum: 1,
          subMenus: [],
          url: '/workFlow/appList',
        },
        {
          belongDefault: true,
          icon: '',
          img: 'wu',
          isAvailable: true,
          menuId: 1377,
          menuName: '工作流首页1.0版本',
          parentMenuId: 1374,
          routeSign: 'v2',
          shortcut: false,
          sortNum: 2,
          subMenus: [],
          url: '/workFlow/home',
        },
        {
          belongDefault: true,
          icon: '',
          img: '1',
          isAvailable: true,
          menuId: 1878,
          menuName: '多流程发起',
          parentMenuId: 1374,
          routeSign: 'v2',
          shortcut: false,
          sortNum: 2147483647,
          subMenus: [],
          url: '/workFlow/createAll?workFlowTypeId=600004',
        },
        {
          belongDefault: true,
          icon: '',
          img: '1',
          isAvailable: true,
          menuId: 1879,
          menuName: '多流程待办',
          parentMenuId: 1374,
          routeSign: 'v2',
          shortcut: false,
          sortNum: 2147483647,
          subMenus: [],
          url: '/workFlow/listAll?workFlowTypeId=600004',
        },
        {
          belongDefault: true,
          icon: '',
          img: '1',
          isAvailable: true,
          menuId: 2078,
          menuName: '工作流分类',
          parentMenuId: 1374,
          routeSign: 'v2',
          shortcut: false,
          sortNum: 2147483647,
          subMenus: [],
          url: '/workFlow/category',
        },
        {
          belongDefault: true,
          icon: '',
          img: '1',
          isAvailable: true,
          menuId: 2311,
          menuName: '明细导出',
          parentMenuId: 1374,
          routeSign: 'v2',
          shortcut: false,
          sortNum: 2147483647,
          subMenus: [],
          url: '/workFlow/listDetail?appId=365',
        },
      ],
      url: '/workFlow',
    },
  ];
  const [, contextHolder] = message.useMessage();
  const [collapsed, setCollapsed] = useState(false);
  // const [visible, setVisible] = useState(false);

  const handleCollapseMenu = () => {
    const nextCollapsed = !collapsed;
    setCollapsed(nextCollapsed);
    setGlobalState({ collapsed: nextCollapsed });
  };

  const handleClickAvatarMenu = ({ key }) => {
    if (key === 'logout') {
      history.push(`/login?redirect=${encodeURIComponent(location.pathname)}`);
    }
  };

  const handleActiveChange = (index) => {
    setGlobalState && setGlobalState({ activeMenuIndex: index });
  };

  // 命中全屏页面路由
  const fullScreen = ALL_SCREEN.some((item) => location.pathname.match(item));

  // 关闭升班提示弹框

  return (
    <ConfigProvider locale={zhCN}>
      {contextHolder}
      <Layout>
        {!fullScreen && (
          <GlobalHeader
            collapsed={collapsed}
            currentUser={currentUser}
            isContact={isContact}
            schools={schools}
            menus={menus}
            onClickAvatarMenu={handleClickAvatarMenu}
            onCollapseMenu={handleCollapseMenu}
            onActiveChange={handleActiveChange}
            loading={loading}
            avatarMenu={avatarMenu}
          />
        )}
        <Content id="sub-app-viewport">
          {loading ? (
            <div className="nbugs-page-loading-container">
              <img src="//img.alicdn.com/tfs/TB1gRhGQVXXXXb.XVXXXXXXXXXX-15-15.gif" alt="" />
              &nbsp;&nbsp;加载中...
            </div>
          ) : (
            <div id="sub-app-viewport"></div>
          )}
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default MainContainerLayout;
