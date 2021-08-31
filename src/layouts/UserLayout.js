/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { connect } from 'umi';
import DocumentTitle from 'react-document-title';
import styles from './UserLayout.less';
import qxIcon from '../assets/user/icon.png';
import longjiaquanIcon from '../assets/user/yishuiLogo.png';
import nanxunIcon from '../assets/user/nanxunLogo.png';
import haizhuIcon from '../assets/user/haizhu.png';
import shangyouIcon from '../assets/user/shangyou.png';
import sanxiIcon from '../assets/user/sanxi.png';
import ytjyddIcon from '../assets/user/ytjydd.png';
import lhIcon from '../assets/user/lh.png';
import jkIcon from '../assets/user/jk.png';
import sxIcon from '../assets/user/sx.png';
import gzcmIcon from '../assets/user/gzcm.png';
import JIAXING from '../assets/user/JIAXING.png';

const hostName = window.location.host;

class UserLayout extends Component {
  static iconURL() {
    if (hostName === 'longjiaquan.xiaoyuanhao.com') {
      return longjiaquanIcon;
    }
    if (hostName === 'nanxun.xiaoyuanhao.com' || hostName === 'nanxun.quxianhao.com') {
      return nanxunIcon;
    }
    if (hostName === 'shangyou.xiaoyuanhao.com' || hostName === 'shangyou.quxianhao.com') {
      return shangyouIcon;
    }
    if (hostName === 'haizhu.api.xiaoyuanhao.com' || hostName === 'haizhu.quxianhao.com') {
      return haizhuIcon;
    }
    if (hostName === 'sxdd.xiaoyuanhao.com') {
      return sanxiIcon;
    }
    if (hostName === 'ytjydd.quxianhao.com') {
      return ytjyddIcon;
    }
    if (hostName === 'lhjydd.quxianhao.com') {
      return lhIcon;
    }
    if (hostName === 'jkjydd.quxianhao.com') {
      return jkIcon;
    }
    if (hostName === 'shixun.quxianhao.com') {
      return sxIcon
    }
    if (hostName === 'gzcm.quxianhao.com') {
      return gzcmIcon
    }
    if (hostName === 'jxjkedu.quxianhao.com') {
      return JIAXING
    }
    return qxIcon;
  }

  static titleName = {
    'haizhu.quxianhao.com': '海珠智慧教育管理平台',
    'shangyou.quxianhao.com': '上犹教育系统智慧信息平台',
    'nanxun.quxianhao.com': '南浔教育系统智慧信息平台',
    'ytjydd.quxianhao.com': '铜川市印台区教育督导',
    'lhjydd.quxianhao.com': '西安市莲湖区教育督导',
    'jkjydd.quxianhao.com': '渭南市经开区教育督导',
    'jxjkedu.quxianhao.com': '嘉兴市经开区教育文体局',
  };

  render() {
    const { children } = this.props;
    return (
      <DocumentTitle title={UserLayout.titleName[hostName] || '登录'}>
        <div className={styles.root}>
          <div className="title-wrap">
            <img className={`icon ${hostName === 'shixun.quxianhao.com' ? 'sx-icon' : ''}`} src={UserLayout.iconURL()} alt="icon" />
          </div>
          <div className="box-container">{children}</div>
          <div className='publicSecurityBureau'>
            <a
              target="_blank"
              href="//www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802010236"
            >
              <img src="//s.xiaoyuanhao.com/file/329cbd7d-eb97-4dfa-9c93-ad346dd0e71d.png" alt='' />
              <p>浙公网安备 33010802010236号</p>
            </a>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default connect()(UserLayout);
