import store from 'store2';
import Net from '@/services';
import { url } from '@/common/container';
// import mockSchools from './school.mock';

/**
 * 获取局或校列表
 * @returns
 */
export async function fetchSchools() {
  // https://auth.xiaoyuanhao.com/xyhauth/getSchoolList?mobile=&requestId=c9d680c0-da48-11ea-9d2a-63d6fdf26a24

  // 本地无法访问时，可通过mock数据返回组织列表
  // return mockSchools;

  const { data: schools } = await Net.request(`${url.auth}/getSchoolList`, {
    search: {
      mobile: store.session('user-mobile'),
    },
  });
  return schools;
}
