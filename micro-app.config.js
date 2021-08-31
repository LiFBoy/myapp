/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/**
 * 微前端配置
 */

// 跳转到新版工作台的白名单
export const WHITE_LIST = [
  '/contacts-v1',
  '/settings-v1',
  '/resource-center',
  '/safety-campus',
  '/access-center',
];

// 跳转到新版协同办公的白名单
export const OA_WHITE_LIST = ['/interactiveV4'];

// 新阅读组件
export const READ_WHITE_LIST = ['/readStatisticsV4'];

export const FLOW = ['/interactiveV4', '/campusSafety', '/eduTagPush', '/workFlow'];

const ENTRY_MAP = {
  development: {
    // temp set
    oldEntry: '//localhost:8000',
    newEntry: '//localhost:8009',
    oaEntry: '//localhost:8010',
    readEntry: '//localhost:8012',
  },
  test: {
    newEntry: '//user-container-test.xiaoyuanhao.com/',
    oldEntry: '//x-container-test.xiaoyuanhao.com/',
    oaEntry: '//test-cooperate-container.xiaoyuanhao.com/',
    readEntry: '//test-read-statistics.xiaoyuanhao.com/',
  },
  production: {
    newEntry: '//user-container.xiaoyuanhao.com/',
    oldEntry: '//x-container.xiaoyuanhao.com/',
    oaEntry: '//cooperate-container.xiaoyuanhao.com/',
    readEntry: '//read-statistics.xiaoyuanhao.com/',
  },
};
console.log(_SERVER_ENV, '_SERVER_ENV');

export default [
  {
    name: '新版工作台',
    entry: ENTRY_MAP[_SERVER_ENV].newEntry,
    activeRule: (location) => {
      return WHITE_LIST.some((path) => location.pathname.startsWith(path));
    },
  },
  {
    name: '工作流',
    entry: ENTRY_MAP[_SERVER_ENV].readEntry,
    activeRule: (location) => {
      console.log(
        '工作流',
        FLOW.some((path) => location.pathname.startsWith(path)),
      );
      return FLOW.some((path) => location.pathname.startsWith(path));
    },
  },
  {
    name: '协同办公oa',
    entry: ENTRY_MAP[_SERVER_ENV].oaEntry,
    activeRule: OA_WHITE_LIST,
  },
  {
    name: '旧版工作台',
    entry: ENTRY_MAP[_SERVER_ENV].oldEntry,
    activeRule: (location) => {
      return (
        WHITE_LIST.every((path) => !location.pathname.startsWith(path)) &&
        OA_WHITE_LIST.every((path) => !location.pathname.startsWith(path)) &&
        READ_WHITE_LIST.every((path) => !location.pathname.startsWith(path))
      );
    },
  },
];

// 全屏页面路由
export const ALL_SCREEN = [
  /\/iframePage\/.*/,
  /.*\/statisticalData\/detail\/print/,
  /.*\/statisticalData\/dataDetail\/print/,
];
