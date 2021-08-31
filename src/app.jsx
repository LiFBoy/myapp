// import { PageLoading } from '@ant-design/pro-layout';
import { history } from 'umi';
import microAppConfig from '../micro-app.config.js';
// import RightContent from '@/components/RightContent';
// import Footer from '@/components/Footer';
// import { BookOutlined, LinkOutlined } from '@ant-design/icons';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api'; // ProLayout 支持的api https://procomponents.ant.design/components/layout
import './styles/index.less'
// export const layout = ({ initialState }) => {
//   return {
//     rightContentRender: () => <RightContent />,
//     disableContentMargin: false,
//     waterMarkProps: {
//       content: initialState?.currentUser?.name,
//     },
//     footerRender: () => <Footer />,
//     onPageChange: () => {
//       const { location } = history; // 如果没有登录，重定向到 login

//       if (!initialState?.currentUser && location.pathname !== loginPath) {
//         history.push(loginPath);
//       }
//     },

//     menuHeaderRender: undefined,
//     // 自定义 403 页面
//     // unAccessible: <div>unAccessible</div>,
//     ...initialState?.settings,
//   };
// };

// export const qiankun = fetch('/config').then(({ apps }) => {
//   return {
//     apps,
//     routes: [
//       {
//         path: '/app1',
//         microApp: 'app1',
//       },
//     ],
//   };
// });


// console.log(microAppConfig.map(({ entry, ...conf }) => ({
//   // container: '#sub-app-container',
//   ...conf,
//   entry,
//   // entry:
//   //   `${entry +
//   //   (entry.indexOf('?') >= 0 ? '&' : '?') 
//   //   }randomTimeStamp=${ 
//   //   Date.now() 
//   //   }${Math.random() 
//   //   }`,
//   props: {
//     ...conf.props,

//   },
// })))
// export const qiankun =  {
//     apps: microAppConfig.map(({ entry, ...conf }) => ({
//       // container: '#sub-app-container',
      
//       // container: '#sub-app-container',
//   ...conf,
//   entry,
//       // entry:
//       //   `${entry +
//       //   (entry.indexOf('?') >= 0 ? '&' : '?') 
//       //   }randomTimeStamp=${ 
//       //   Date.now() 
//       //   }${Math.random() 
//       //   }`,
//       props: {
//         ...conf.props,

//       },
//     })),
//     routes: [
//       {
//         path: '/workflow',
//         name: 'workflow',
//         microApp: 'workflow',
//         icon: 'smile',
//       },
//     ],
//     lifeCycles: {
//       beforeLoad: [
//         (app) => {
//           console.log(
//             '[LifeCycle] before load %c%s',
//             'color: green;',
//             app.name
//           );
//         },
//       ],
//       beforeMount: [
//         (app) => {
//           console.log(
//             '[LifeCycle] before mount %c%s',
//             'color: green;',
//             app.name
//           );
//         },
//       ],
//       afterMount: [
//         (app) => {
//           // setGlobalState(currentState);
//           console.log(
//             '[LifeCycle] after mount %c%s',
//             'color: green;',
//             app.name
//           );
//         },
//       ],
//       afterUnmount: [
//         (app) => {
//           console.log(
//             '[LifeCycle] after unmount %c%s',
//             'color: green;',
//             app.name
//           );
//         },
//       ],
//     }
    
//   };



import { registerMicroApps, start, initGlobalState } from 'qiankun';

import render from './layouts/BaseLayout';

// const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
/** 获取用户信息比较慢的时候会展示一个 loading */

// export const initialStateConfig = {
//   loading: <PageLoading />,
// };
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */

export async function getInitialState() {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser();
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }

    return undefined;
  }; // 如果是登录页面，不执行

  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    console.log(currentUser, 'currentUser')
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
    };
  }

  return {
    fetchUserInfo,
    settings: {},
  };
}
let currentState = null;


function initState(initialState) {
  const { onGlobalStateChange, setGlobalState } = initGlobalState(initialState);
  return { onGlobalStateChange, setGlobalState };
}

function initAppRegistration( loader, setGlobalState, initialState) {
  const { currentUser } = initialState || {};
  const { orgId } = currentUser || {};

  registerMicroApps(
    microAppConfig.map(({ entry, ...conf }) => ({
      container: '#sub-app-viewport',
      ...conf,
      // loader,
      entry:
        `${entry +
        (entry.indexOf('?') >= 0 ? '&' : '?') 
        }randomTimeStamp=${ 
        Date.now() 
        }${Math.random() 
        }&orgId=${ 
        orgId}`,
      props: {
        ...conf.props,
        // errorHandler,
      },
    })),
    {
      beforeLoad: [
        (app) => {
          console.log(
            '[LifeCycle] before load %c%s',
            'color: green;',
            app.name
          );
        },
      ],
      beforeMount: [
        (app) => {
          console.log(
            '[LifeCycle] before mount %c%s',
            'color: green;',
            app.name
          );
        },
      ],
      afterMount: [
        (app) => {
          setGlobalState(currentState);
          console.log(
            '[LifeCycle] after mount %c%s',
            'color: green;',
            app.name
          );
        },
      ],
      afterUnmount: [
        (app) => {
          console.log(
            '[LifeCycle] after unmount %c%s',
            'color: green;',
            app.name
          );
        },
      ],
    }
  );
}


function bootstrap() {
  const initialState = {
    "currentUser": {
        "schoolName": "产品校园",
        "schoolLogo": "//classpic.oss-cn-hangzhou.aliyuncs.com/avatar/330108-S000351.jpg",
        "name": "李建彬",
        "avatar": "//gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
        "orgId": "330108-S000351",
        "userInfo": {
            "roles": [
                {
                    "deptName": "教师",
                    "roleRemark": "",
                    "deptId": "def8e4b0d99b47fe8d87d614689aaed9",
                    "roleName": "老师",
                    "deptType": "行政部门"
                }
            ],
            "userType": "教师",
            "relationDetail": "",
            "userName": "李建彬",
            "userId": "0C4C30AE3C1647E28FC27C0D3A0EEB67",
            "relation": "本人"
        },
        "enOrgType": "general_school",
        "orgType": "school"
    },
    "menus": [
        {
            "belongDefault": true,
            "icon": "",
            "img": "1",
            "isAvailable": true,
            "menuId": 2109,
            "menuName": "活动打卡",
            "parentMenuId": 0,
            "routeSign": "v2",
            "shortcut": false,
            "sortNum": 1,
            "subMenus": [
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2110,
                    "menuName": "我创建的",
                    "parentMenuId": 2109,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/interaction/activitySign/list"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2111,
                    "menuName": "数据管理",
                    "parentMenuId": 2109,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/interaction/activitySign/dataManage"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2112,
                    "menuName": "指标统计",
                    "parentMenuId": 2109,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/interaction/activitySign/statistics"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2113,
                    "menuName": "数据统计",
                    "parentMenuId": 2109,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/interaction/activitySign/dataStatistic"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2172,
                    "menuName": "精选",
                    "parentMenuId": 2109,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/interaction/activitySign/selected"
                }
            ],
            "url": "/interaction/activitySign"
        },
        {
            "belongDefault": true,
            "icon": "message",
            "img": "1",
            "isAvailable": true,
            "menuId": 1133,
            "menuName": "互动交流0331",
            "parentMenuId": 0,
            "routeSign": "v2",
            "shortcut": false,
            "sortNum": 25,
            "subMenus": [
                {
                    "belongDefault": true,
                    "icon": "area-address-book",
                    "img": "2",
                    "isAvailable": true,
                    "menuId": 1134,
                    "menuName": "通知管理",
                    "parentMenuId": 1133,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [
                        {
                            "belongDefault": true,
                            "icon": "education-love",
                            "img": "23",
                            "isAvailable": true,
                            "menuId": 1135,
                            "menuName": "新建通知",
                            "parentMenuId": 1134,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/notice/outbox/create"
                        },
                        {
                            "belongDefault": true,
                            "icon": "setting",
                            "img": "3",
                            "isAvailable": true,
                            "menuId": 1136,
                            "menuName": "收件箱",
                            "parentMenuId": 1134,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/notice/inbox"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "34",
                            "isAvailable": true,
                            "menuId": 1137,
                            "menuName": "发件箱",
                            "parentMenuId": 1134,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/notice/outbox"
                        }
                    ],
                    "url": "/notice"
                }
            ],
            "url": "/notice/outbox/create"
        },
        {
            "belongDefault": true,
            "icon": "",
            "img": "333333",
            "isAvailable": true,
            "menuId": 1145,
            "menuName": "通讯录0331",
            "parentMenuId": 0,
            "routeSign": "v2",
            "shortcut": false,
            "sortNum": 27,
            "subMenus": [
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "888",
                    "isAvailable": true,
                    "menuId": 1146,
                    "menuName": "通讯录",
                    "parentMenuId": 1145,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/contacts/list"
                }
            ],
            "url": "/contacts"
        },
        {
            "belongDefault": true,
            "icon": "",
            "img": "1",
            "isAvailable": true,
            "menuId": 1207,
            "menuName": "宣传管理-新",
            "parentMenuId": 0,
            "routeSign": "v2",
            "shortcut": false,
            "sortNum": 29,
            "subMenus": [
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 1208,
                    "menuName": "资讯发布",
                    "parentMenuId": 1207,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 1213,
                            "menuName": "新建",
                            "parentMenuId": 1208,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/microsite/submissions/submissions"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 1214,
                            "menuName": "审批",
                            "parentMenuId": 1208,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/microsite/submissions/list"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 1215,
                            "menuName": "发布",
                            "parentMenuId": 1208,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/microsite/submissions/editCheck"
                        }
                    ],
                    "url": "/microsite/submissions"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 1209,
                    "menuName": "资讯管理",
                    "parentMenuId": 1207,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 1216,
                            "menuName": "资讯管理",
                            "parentMenuId": 1209,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/microsite/publish/list"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 1217,
                            "menuName": "留言记录",
                            "parentMenuId": 1209,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/microsite/publish/leaveWord"
                        }
                    ],
                    "url": "/microsite/publish"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 1210,
                    "menuName": "全区官网",
                    "parentMenuId": 1207,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 1218,
                            "menuName": "官网联盟",
                            "parentMenuId": 1210,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/microsite/schoolMatrix/schoolMatrix"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 1219,
                            "menuName": "全区资讯",
                            "parentMenuId": 1210,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/microsite/schoolMatrix/latestNews"
                        }
                    ],
                    "url": "/microsite/schoolMatrix"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 1211,
                    "menuName": "操作记录",
                    "parentMenuId": 1207,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 1220,
                            "menuName": "同步记录",
                            "parentMenuId": 1211,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/microsite/operateRecord/allSync"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 1221,
                            "menuName": "上报记录",
                            "parentMenuId": 1211,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/microsite/operateRecord/record"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 1222,
                            "menuName": "推送记录",
                            "parentMenuId": 1211,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/microsite/operateRecord/pushRecord"
                        }
                    ],
                    "url": "/microsite/operateRecord"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 1212,
                    "menuName": "设置",
                    "parentMenuId": 1207,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 1223,
                            "menuName": "模板设置",
                            "parentMenuId": 1212,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/microsite/webSet/HomeSet"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 1224,
                            "menuName": "栏目设置",
                            "parentMenuId": 1212,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/microsite/webSet/columnSet"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 1225,
                            "menuName": "标签设置",
                            "parentMenuId": 1212,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/microsite/webSet/labelSet"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 1226,
                            "menuName": "推送设置",
                            "parentMenuId": 1212,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/microsite/webSet/pushSet"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 1227,
                            "menuName": "基本设置",
                            "parentMenuId": 1212,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/microsite/webSet/webSet"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 1228,
                            "menuName": "公众号设置",
                            "parentMenuId": 1212,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/microsite/webSet/publicSet"
                        }
                    ],
                    "url": "/microsite/webSet"
                }
            ],
            "url": "/microsite"
        },
        {
            "belongDefault": true,
            "icon": "",
            "img": "https://jybxiaochong.oss-cn-hangzhou.aliyuncs.com/3reIfQzKdf79Wrc2nT8JGl.png",
            "isAvailable": true,
            "menuId": 1374,
            "menuName": "工作流2.0",
            "parentMenuId": 0,
            "routeSign": "v2",
            "shortcut": false,
            "sortNum": 31,
            "subMenus": [
                {
                    "belongDefault": true,
                    "icon": "survey-statistics",
                    "img": "wu",
                    "isAvailable": true,
                    "menuId": 1376,
                    "menuName": "应用列表",
                    "parentMenuId": 1374,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 1,
                    "subMenus": [],
                    "url": "/workFlow/appList"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "wu",
                    "isAvailable": true,
                    "menuId": 1377,
                    "menuName": "工作流首页1.0版本",
                    "parentMenuId": 1374,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2,
                    "subMenus": [],
                    "url": "/workFlow/home"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 1878,
                    "menuName": "多流程发起",
                    "parentMenuId": 1374,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/workFlow/createAll?workFlowTypeId=600004"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 1879,
                    "menuName": "多流程待办",
                    "parentMenuId": 1374,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/workFlow/listAll?workFlowTypeId=600004"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2078,
                    "menuName": "工作流分类",
                    "parentMenuId": 1374,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/workFlow/category"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2311,
                    "menuName": "明细导出",
                    "parentMenuId": 1374,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/workFlow/listDetail?appId=365"
                }
            ],
            "url": "/workFlow"
        },
        {
            "belongDefault": true,
            "icon": "",
            "img": "1",
            "isAvailable": true,
            "menuId": 2139,
            "menuName": "协同办公",
            "parentMenuId": 0,
            "routeSign": "v2",
            "shortcut": false,
            "sortNum": 35,
            "subMenus": [
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2140,
                    "menuName": "通知管理",
                    "parentMenuId": 2139,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 2141,
                            "menuName": "新建通知",
                            "parentMenuId": 2140,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/interactive/notice/create"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 2142,
                            "menuName": "收件箱",
                            "parentMenuId": 2140,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/interactive/notice/inbox"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 2143,
                            "menuName": "发件箱",
                            "parentMenuId": 2140,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/interactive/notice/outbox"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 2144,
                            "menuName": "个性化群发",
                            "parentMenuId": 2140,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/interactive/notice/personalize"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 2145,
                            "menuName": "数据管理",
                            "parentMenuId": 2140,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/interactive/notice/dataManage"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 2146,
                            "menuName": "数据统计",
                            "parentMenuId": 2140,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/interactive/notice/statistics"
                        },
                        {
                            "belongDefault": true,
                            "icon": "",
                            "img": "1",
                            "isAvailable": true,
                            "menuId": 2147,
                            "menuName": "历史消息",
                            "parentMenuId": 2140,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/interactive/notice/history"
                        }
                    ],
                    "url": "/interactive/notice"
                }
            ],
            "url": "/interactive"
        },
        {
            "belongDefault": false,
            "icon": "",
            "img": "",
            "isAvailable": false,
            "menuId": 1919,
            "menuName": "数据填报",
            "parentMenuId": 0,
            "routeSign": "v2",
            "shortcut": false,
            "sortNum": 2147483647,
            "subMenus": [
                {
                    "belongDefault": false,
                    "icon": "",
                    "img": "",
                    "isAvailable": false,
                    "menuId": 1920,
                    "menuName": "发件箱",
                    "parentMenuId": 1919,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/dataReport/outbox"
                },
                {
                    "belongDefault": false,
                    "icon": "",
                    "img": "",
                    "isAvailable": false,
                    "menuId": 1921,
                    "menuName": "收件箱",
                    "parentMenuId": 1919,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/dataReport/inbox"
                },
                {
                    "belongDefault": false,
                    "icon": "",
                    "img": "",
                    "isAvailable": false,
                    "menuId": 1922,
                    "menuName": "模版库",
                    "parentMenuId": 1919,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/dataReport/template"
                },
                {
                    "belongDefault": false,
                    "icon": "",
                    "img": "",
                    "isAvailable": false,
                    "menuId": 1923,
                    "menuName": "数据管理",
                    "parentMenuId": 1919,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [
                        {
                            "belongDefault": false,
                            "icon": "",
                            "img": "",
                            "isAvailable": false,
                            "menuId": 1924,
                            "menuName": "当前组织查询",
                            "parentMenuId": 1923,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/dataReport/dataManage/curOrg"
                        },
                        {
                            "belongDefault": false,
                            "icon": "",
                            "img": "",
                            "isAvailable": false,
                            "menuId": 1925,
                            "menuName": "统计查询",
                            "parentMenuId": 1923,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/dataReport/dataManage/curDep"
                        },
                        {
                            "belongDefault": false,
                            "icon": "",
                            "img": "",
                            "isAvailable": false,
                            "menuId": 1926,
                            "menuName": "数据管理",
                            "parentMenuId": 1923,
                            "routeSign": "v2",
                            "shortcut": false,
                            "sortNum": 2147483647,
                            "subMenus": [],
                            "url": "/dataReport/dataManageList"
                        }
                    ],
                    "url": "/dataReport/dataManage"
                }
            ],
            "url": "/dataReport"
        },
        {
            "belongDefault": true,
            "icon": "",
            "img": "1",
            "isAvailable": true,
            "menuId": 2373,
            "menuName": "健康上报",
            "parentMenuId": 0,
            "routeSign": "v2",
            "shortcut": false,
            "sortNum": 2147483647,
            "subMenus": [
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2374,
                    "menuName": "发件箱",
                    "parentMenuId": 2373,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/antiepidemicStation/healthReport/outbox"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2375,
                    "menuName": "收件箱",
                    "parentMenuId": 2373,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/antiepidemicStation/healthReport/inbox"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2376,
                    "menuName": "模板库",
                    "parentMenuId": 2373,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/antiepidemicStation/healthReport/template"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2377,
                    "menuName": "数据管理",
                    "parentMenuId": 2373,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/antiepidemicStation/healthReport/dataManageList"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2383,
                    "menuName": "当前组织查询",
                    "parentMenuId": 2373,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/antiepidemicStation/healthReport/dataManage/curOrg"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2384,
                    "menuName": "下级组织查询",
                    "parentMenuId": 2373,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/antiepidemicStation/healthReport/dataManage/subOrg"
                }
            ],
            "url": "/antiepidemicStation/healthReport"
        },
        {
            "belongDefault": true,
            "icon": "",
            "img": "1",
            "isAvailable": true,
            "menuId": 2378,
            "menuName": "疫苗接种统计",
            "parentMenuId": 0,
            "routeSign": "v2",
            "shortcut": false,
            "sortNum": 2147483647,
            "subMenus": [
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2379,
                    "menuName": "发件箱",
                    "parentMenuId": 2378,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/antiepidemicStation/vaccinationStatistics/outbox"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2380,
                    "menuName": "收件箱",
                    "parentMenuId": 2378,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/antiepidemicStation/vaccinationStatistics/inbox"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2381,
                    "menuName": "模板库",
                    "parentMenuId": 2378,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/antiepidemicStation/vaccinationStatistics/template"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2382,
                    "menuName": "数据管理",
                    "parentMenuId": 2378,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/antiepidemicStation/vaccinationStatistics/dataManageList"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2385,
                    "menuName": "当前组织查询",
                    "parentMenuId": 2378,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/antiepidemicStation/vaccinationStatistics/dataManage/curOrg"
                },
                {
                    "belongDefault": true,
                    "icon": "",
                    "img": "1",
                    "isAvailable": true,
                    "menuId": 2386,
                    "menuName": "下级组织查询",
                    "parentMenuId": 2378,
                    "routeSign": "v2",
                    "shortcut": false,
                    "sortNum": 2147483647,
                    "subMenus": [],
                    "url": "/antiepidemicStation/vaccinationStatistics/dataManage/subOrg"
                }
            ],
            "url": "/antiepidemicStation/vaccinationStatistics"
        }
    ],
    "schools": [
        {
            "id": "330101-S000052",
            "parentId": "330101",
            "orgName": "雪涛教育局",
            "areaCode": "330101",
            "managementEntityName": "教育局",
            "managementEntitySign": "county_bureau_educ",
            "address": null,
            "legalPerson": "高娜",
            "legalMobile": "18896598325",
            "isDelete": "0",
            "createUser": "eova-15093362617-mlz",
            "modifyUser": "batch_sync_v4->v3",
            "gmtCreate": 1600332665000,
            "gmtModify": 1612546785000,
            "syncIndex": null,
            "homeUrl": null
        },
        {
            "id": "330108-S000067",
            "parentId": "330108",
            "orgName": "sunshine学院",
            "areaCode": "330108",
            "managementEntityName": "学校",
            "managementEntitySign": "general_school",
            "address": null,
            "legalPerson": null,
            "legalMobile": null,
            "isDelete": "0",
            "createUser": "sync",
            "modifyUser": "batch_sync_v4->v3",
            "gmtCreate": 1483602771000,
            "gmtModify": 1620451107000,
            "syncIndex": 2673,
            "homeUrl": "https://manage-container.xiaoyuanhao.com/"
        },
        {
            "id": "330108-S000249",
            "parentId": "330108",
            "orgName": "区县教育局",
            "areaCode": "330108",
            "managementEntityName": "教育局",
            "managementEntitySign": "county_bureau_educ",
            "address": "杭州",
            "legalPerson": "cxf",
            "legalMobile": "13588331384",
            "isDelete": "0",
            "createUser": "eova-15258805933",
            "modifyUser": "batch_sync_v4->v3",
            "gmtCreate": 1552456923000,
            "gmtModify": 1625829887000,
            "syncIndex": null,
            "homeUrl": "https://manage-container.xiaoyuanhao.com/"
        },
        {
            "id": "330108-S000351",
            "parentId": "330108",
            "orgName": "产品校园",
            "areaCode": "330108",
            "managementEntityName": "学校",
            "managementEntitySign": "general_school",
            "address": null,
            "legalPerson": "高娜",
            "legalMobile": "18896598325",
            "isDelete": "0",
            "createUser": "eova-15093362617-mlz",
            "modifyUser": "batch_sync_v4->v3",
            "gmtCreate": 1586241554000,
            "gmtModify": 1626180525000,
            "syncIndex": null,
            "homeUrl": "https://manage-container.xiaoyuanhao.com/"
        },
        {
            "id": "440101-S000011",
            "parentId": "440101",
            "orgName": "广州市测试第一学校",
            "areaCode": "440101",
            "managementEntityName": "学校",
            "managementEntitySign": "general_school",
            "address": null,
            "legalPerson": null,
            "legalMobile": null,
            "isDelete": "0",
            "createUser": "eova-15258805933",
            "modifyUser": "batch_sync_v4->v3",
            "gmtCreate": 1563341331000,
            "gmtModify": 1616653845000,
            "syncIndex": null,
            "homeUrl": "https://manage-container.xiaoyuanhao.com/"
        }
    ],
    "isContact": 0
};
  const { onGlobalStateChange, setGlobalState } = initState(initialState);
  currentState = initialState;
  const loader = (loading) =>
    render({ loading, ...initialState, setGlobalState, onGlobalStateChange });
  initAppRegistration(loader, setGlobalState, initialState);
  start();
  onGlobalStateChange((value, prev) => {
    currentState = value;
    console.log('[onGlobalStateChange - master]:', value, prev);
  });
}


bootstrap();