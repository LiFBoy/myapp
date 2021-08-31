/* eslint-disable no-underscore-dangle */
import React from 'react';
import { BugOutlined } from '@ant-design/icons';

import contacts from './routers/contacts';
import settings from './routers/settings';

const routerMap = {
  '/': {
    exact: true,
    component: React.lazy(() => import('../layouts/basic-layout')),
    children: {
      ...contacts,
      ...settings,
    },
  },
};

// 开发状态才有的路由
if (window._IS_LOCAL) {
  routerMap['/'].children['/example'] = {
    name: 'Examples',
    icon: <BugOutlined />,
    children: {
      '/form-page': {
        name: 'Form Demo',
        component: React.lazy(() => import('../pages/examples/form-page')),
      },
    },
  };
}

export default routerMap;
