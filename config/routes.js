export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },

  // {
  //   path: '/app1',
  //   name: 'app1',
  //   microApp: 'app1',
  //   icon: 'smile',
  // },
  // {
  //   path: '/workflow',
  //   name: 'workflow',
  //   microApp: 'workflow',
  //   icon: 'smile',
  // },
  {
    path: '/',
    component: '../layouts/BaseLayout',
    routes: [
      {
        path: '/welcome',
        name: '测试',
        icon: 'smile',
        component: './Welcome',
      },
    ],
    // redirect: '/welcome',
  },
  {
    component: './404',
  },
];
