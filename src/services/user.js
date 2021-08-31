/* eslint-disable no-return-await */
import store from 'store2';
import Net from '@/services';
import { url } from '@/common/container';
import { ENV, funVerifySuccess } from '@/common/util';

export async function fetchCurrent() {
  const {
    data: { users = [], orgName, orgId, enOrgType, homeUrl },
  } = await Net.request(`${url.auth}/getXyhUser`, {
    method: 'GET',
    search: {
      schoolId: store.session('user-orgId'),
    },
  });

  if (ENV === 'production' && !funVerifySuccess()) {
    if (!homeUrl) {
      window.location.href = 'https://t.xiaoyuanhao.com';
      return !0;
    }

    const localHref = /^http(s)?:\/\/(.*?)\//.exec(homeUrl || '');
    if (localHref && localHref.length >= 3 && localHref[2] !== window.location.hostname) {
      window.location.href = homeUrl;
      return !0;
    }
  }

  const userInfo = users.find((user) => user.userType && user.userType !== '学生');
  const currentUser = {
    schoolName: orgName,
    schoolLogo: `//classpic.oss-cn-hangzhou.aliyuncs.com/avatar/${orgId}.jpg`,
    name: userInfo.userName,
    avatar: '//gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    orgId,
    userInfo,
    enOrgType, // general_school 学校; county_bureau_educ 教育局; central_school 中心校
    orgType: { general_school: 'school', county_bureau_educ: 'county', central_school: 'school' }[
      enOrgType
    ],
  };

  store.session('currentUser', currentUser);

  return currentUser;
}

export async function fetchIsContact() {
  const { data } = await Net.request(`${url.authWorkApi}/wxauth/use/work/contact`, {
    method: 'GET',
    search: {
      orgid: store.session('currentUser').orgId,
    },
  });

  return data;
}

// 升班提示弹框是否展示
export async function isShowGoUpTips() {
  const { data } =
    (await Net.request(`${url.goUpClass}/backend/loginUser/getUpStatus`, {
      method: 'GET',
    })) || {};
  return data;
}
