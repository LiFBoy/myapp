/* eslint-disable no-restricted-globals */
export const ENV = (document.querySelector('meta[name="x-server-env"]') || { content: 'dev' })
  .content;

// const urlCollect = {
//   // 开发环境
//   dev: {
//     mock: '/mock',
//     menu: '//dev.xiaoyuanhao.com/menu',
//     user: '//dev.xiaoyuanhao.com/xjf',
//     auth: '//aly-test.api.xiaoyuanhao.com/auth/xyhauth',
//     recruit: 'http://dev.xiaoyuanhao.com/cx/cx-nbugs-activity/web/county',
//     meetingSign: '//test-deploy.api.xiaoyuanhao.com/yunzhi-notice-v2-test/web',
//     studentAttendance: '//dev18.xiaoyuanhao.com/sh-attendance3',
//     fileApi: '//file.xiaoyuanhao.com',
//     webApi: '//test-deploy.api.xiaoyuanhao.com',
//     settingApi: '//test.xiaoyuanhao.com:39027/sentinel',
//     noticeApi: '//dev18.xiaoyuanhao.com/jdm_notice/web', // 通知公告api
//     bridgeApi: '//test-deploy.api.xiaoyuanhao.com/nbugs-bridge-test-qa', // 通知鹊桥api
//     countAPI: '//test-deploy.api.xiaoyuanhao.com/counter-static-jar-qa/counter-static', // 阅读统计
//     contacts: '//test-deploy.api.xiaoyuanhao.com/cloud-contacts-test',
//     tool: 'https://sync-task.api.xiaoyuanhao.com',
//     tags: '//test-deploy.api.xiaoyuanhao.com/tag-manage-qa',
//     log: 'http://test-deploy.api.xiaoyuanhao.com/operation-log-component-test',
//     url: 'http://test-deploy.api.xiaoyuanhao.com/cloud-contacts-test',
//     safeClock: '//dev18.xiaoyuanhao.com/jdm_notice/web', // 平安钟api
//     authApi: '//test-deploy.api.xiaoyuanhao.com/nbugs-auth-center-qa', // 用户中心获取应用接口域名
//     salaryApi: '//test-deploy.api.xiaoyuanhao.com/yunzhi-notice-v2-test/web', // 工资条
//     dataReport: '//test-deploy.api.xiaoyuanhao.com/yunzhi-notice-test/web', // 数据填报api
//     o2oa: '//sloa.api.xiaoyuanhao.com:40194', // o2oa
//     activitySign: '//test-deploy.api.xiaoyuanhao.com/yunzhi-interaction-test/web', // 活动打卡
//     read: '//aly-test.api.xiaoyuanhao.com/yunzhi-statistic-module-test/web', // 阅读组件
//     workFlow: '//aly-test.api.xiaoyuanhao.com/yunzhi-data-test/web', // 工作流
//   },
//   // 测试环境
//   test: {
//     mock: '/mock',
//     menu: '//aly-test.api.xiaoyuanhao.com/nbugs-permission-center-test',
//     user: '//aly-test.api.xiaoyuanhao.com/sh-user-center-test',
//     auth: '//aly-test.api.xiaoyuanhao.com/nbugs-auth-center-test/xyhauth',
//     // 教育扶贫
//     poor: '//dev.xiaoyuanhao.com/nbugs_activity',
//     // 鹊桥
//     qq: '//dev.xiaoyuanhao.com/bridge',
//     recruit: '//test-deploy.api.xiaoyuanhao.com/nbugs-activity-recruit-qa/web/county',
//     meetingSign: 'http://test-deploy.api.xiaoyuanhao.com/yunzhi-notice-v2-test/web',
//     studentAttendance: 'http://test-deploy.api.xiaoyuanhao.com/yunzhi-safety-test',
//     // studentAttendance: '//dev18.xiaoyuanhao.com/sh-attendance3',
//     fileApi: '//file.xiaoyuanhao.com',
//     webApi: '//test-deploy.api.xiaoyuanhao.com',
//     settingApi: '//test.xiaoyuanhao.com:39027/sentinel',
//     noticeApi: '//aly-test.api.xiaoyuanhao.com/yunzhi-notice-test/web', // 通知公告api
//     bridgeApi: '//test-deploy.api.xiaoyuanhao.com/nbugs-bridge-test-qa', // 通知鹊桥api
//     countAPI: '//aly-test.api.xiaoyuanhao.com/counter-static-test/counter-static', // 阅读统计
//     contacts: '//aly-test.api.xiaoyuanhao.com/cloud-contacts-test',
//     tool: 'https://sync-task.api.xiaoyuanhao.com',
//     tags: '//aly-test.api.xiaoyuanhao.com/tag-manage-test',
//     log: 'http://aly-test.api.xiaoyuanhao.com/operation-log-component-test',
//     url: 'http://aly-test.api.xiaoyuanhao.com/cloud-contacts-test',
//     safeClock: '//aly-test.api.xiaoyuanhao.com/yunzhi-notice-test/web', // 平安钟api
//     authApi: '//aly-test.api.xiaoyuanhao.com/nbugs-auth-center-test', // 用户中心获取应用接口域名
//     dataReport: '//aly-test.api.xiaoyuanhao.com/yunzhi-notice-test/web', // 数据填报api
//     salaryApi: '//test-deploy.api.xiaoyuanhao.com/yunzhi-notice-v2-test/web', // 工资条
//     o2oa: '//sloa.api.xiaoyuanhao.com:40194', // o2oa
//     activitySign: '//aly-test.api.xiaoyuanhao.com/yunzhi-interaction-test/web', // 活动打卡
//     read: '//aly-test.api.xiaoyuanhao.com/yunzhi-statistic-module-test/web', // 阅读组件
//     workFlow: '//aly-test.api.xiaoyuanhao.com/yunzhi-data-test/web', // 工作流
//   },
//   // 生产环境
//   production: {
//     mock: '/mock',
//     menu: '//perm.api.xiaoyuanhao.com',
//     user: '//user.api.xiaoyuanhao.com',
//     auth: '//auth.xiaoyuanhao.com/xyhauth',
//     // 教育扶贫
//     poor: '//help-poor.api.xiaoyuanhao.com',
//     // 鹊桥
//     qq: '//bridge.api.xiaoyuanhao.com',
//     recruit: '//recruit.api.xiaoyuanhao.com/web/county',
//     meetingSign: '//notice.api.xiaoyuanhao.com/web',
//     studentAttendance: '//safety.api.xiaoyuanhao.com',
//     fileApi: '//file.xiaoyuanhao.com',
//     webApi: '//microsit.xiaoyuanhao.com/wz',
//     settingApi: '//sentinel.api.xiaoyuanhao.com',
//     noticeApi: '//notice.api.xiaoyuanhao.com/web', // 通知公告api
//     bridgeApi: '//bridge.api.xiaoyuanhao.com', // 通知鹊桥api
//     countAPI: '//counter.api.xiaoyuanhao.com/counter-static', // 阅读统计
//     contacts: '//gateway.api.xiaoyuanhao.com/contacts',
//     tool: 'https://sync-task.api.xiaoyuanhao.com',
//     tags: '//tag.api.xiaoyuanhao.com',
//     log: 'https://gateway.api.xiaoyuanhao.com/operation-log',
//     url: 'https://gateway.api.xiaoyuanhao.com/contacts',
//     safeClock: '//notice.api.xiaoyuanhao.com/web', // 平安钟api
//     authApi: '//auth.xiaoyuanhao.com', // 用户中心获取应用接口域名
//     salaryApi: '//notice.api.xiaoyuanhao.com/web', // 工资条
//     dataReport: '//notice.api.xiaoyuanhao.com/web', // 数据填报api
//     o2oa: '//sloa.api.xiaoyuanhao.com:40194', // o2oa
//     activitySign: '//clock2.api.xiaoyuanhao.com/yunzhi-interaction/web', // 活动打卡
//     read: '//yunzhi-statistic-module.api.xiaoyuanhao.com/web', // 阅读组件
//     workFlow: '//yunzhi-data.api.xiaoyuanhao.com/web', // 工作流导出统计
//   }
// };

// export const url = urlCollect[ENV];

export const jumpToLogin = () => {
  /**
   * url的重定向映射
   * 不同的域名可能有不同的登陆url
   * 如果没有匹配到，默认跳转到location.origin+'/login'页面
   */
  const urlMapping = {
    'teacher.114school.com': '//114school.com',
  };

  const qxHostname = [
    'qxh.xiaoyuanhao.com',
    'www.quxianhao.com',
    'longjiaquan.xiaoyuanhao.com',
    'nanxun.quxianhao.com',
    'nanxun.xiaoyuanhao.com',
    'sxdd.xiaoyuanhao.com',
    'shangyou.xiaoyuanhao.com',
    'sishili.xiaoyuanhao.com',
    'yangzhuang.xiaoyuanhao.com',
    'quanzhuang.xiaoyuanhao.com',
    'yicheng.xiaoyuanhao.com',
    'cuijiayu.xiaoyuanhao.com',
    'daotuo.xiaoyuanhao.com',
    'fuguan.xiaoyuanhao.com',
    'gaoqiao.xiaoyuanhao.com',
    'gaozhuang.xiaoyuanhao.com',
    'huangshanpu.xiaoyuanhao.com',
    'mazhan.xiaoyuanhao.com',
    'quanlixiang.xiaoyuanhao.com',
    'quanzhuang.xiaoyuanhao.com',
    'shagou.xiaoyuanhao.com',
    'sishili.xiaoyuanhao.com',
    'xiawei.xiaoyuanhao.com',
    'xujiahu.xiaoyuanhao.com',
    'yaodianzi.xiaoyuanhao.com',
    'yangzhuang.xiaoyuanhao.com',
    'yicheng.xiaoyuanhao.com',
    'yuandongtou.xiaoyuanhao.com',
    'zhuge.xiaoyuanhao.com',
    'jyjzs.xiaoyuanhao.com',
    'shangyou.quxianhao.com',
    'haizhu.quxianhao.com',
    'nanxun.quxianhao.com',
    'ytjydd.quxianhao.com',
    'lhjydd.quxianhao.com',
    'tll.quxianhao.com',
    'ty.quxianhao.com',
    'jkjydd.quxianhao.com',
    'guiding.quxianhao.com',
    'demo.quxianhao.com',
    'gzcm.quxianhao.com',
    'ysx.api.xiaoyuanhao.com',
    'jxjkedu.quxianhao.com',
    'ninghai.quxianhao.com',
  ];

  const loginGuide = global.location.hostname;

  if (urlMapping[loginGuide]) {
    location.href = urlMapping[loginGuide];
    return;
  }
  if (qxHostname.some((q) => q === loginGuide)) {
    // 区县一体化系统的跳转逻辑
    location.href = `${location.origin}/v2/user/v2-login`;
    return;
  }

  location.href = `${location.origin}/login`;
};
