import React, { useState, useLayoutEffect, useRef, useMemo } from 'react';
import { Menu, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { pushHistory } from '@/common/util';
import classNames from 'classnames';
import Right from './right-menu';

import styles from './index.less';

function getFirstChildPath(pathItem) {
  const { subMenus: children } = pathItem;
  if (!children || children.length === 0) {
    return pathItem.url;
  }
  return getFirstChildPath(children[0]);
}

export default ({
  collapsed,
  // avatarMenu = [],
  // onClickAvatarMenu,
  onCollapseMenu,
  // currentUser = {},
  menus = [],
  schools = [],
  onActiveChange,
  // loading,
  isContact,
}) => {
  const currentUser = {
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
  };
  const menuList = useMemo(() => {
    return (menus || []).map(({ menuName, url, routeSign, subMenus }) => {
      return { menuName, url, routeSign, subMenus };
    });
  }, [menus]);

  // const { pathname } = location;
  const $header = useRef(null);
  const $titleWrapper = useRef(null);
  const $right = useRef(null);
  const [menuWidth, setMenuWidth] = useState('0');
  const [activeIndex, setActiveIndex] = useState(-1);

  function updateMenuWidth() {
    if (!($header.current && $titleWrapper.current && $right.current)) return;
    setMenuWidth(`${$header.current.getBoundingClientRect().width - $titleWrapper.current.getBoundingClientRect().width - $right.current.getBoundingClientRect().width  }px`);
  }
  useLayoutEffect(() => {
    updateMenuWidth();
    window.addEventListener('resize', updateMenuWidth);
    return () =>
      window.removeEventListener('resize', updateMenuWidth);
  }, []);
  // useEffect(() => {
  //   const pathRegex = new RegExp('^\\' + pathname.match(/^\/[^/]*/)[0] + '(\\/|$)');
  //   const matchedActiveIndex = menuList.findIndex(({ url }) => {
  //     return pathRegex.test(url);
  //   });

  //   if (window.location.pathname !== '/' && menuList?.length && matchedActiveIndex === -1 && isFilterUrlArr(window.location.pathname)) {
  //     Modal.warning({
  //       title: '提示',
  //       content: '当前用户没有该应用的使用权限，请联系管理员申请权限。',
  //       okText: '确定'
  //     });
  //   }

  //   if (matchedActiveIndex !== activeIndex) {
  //     updateActiveIndex(matchedActiveIndex);
  //   }
  // }, [pathname, menuList]);
  const updateActiveIndex = (index) => {
    setActiveIndex(index);
    onActiveChange(index);
  };

  const handleSelect = (index, url) => {
    const { subMenus: subMenuList = [] } = menuList[index];
    updateActiveIndex(index);

    // 点击菜单后，自动跳转到第一个子项path
    if (subMenuList.length) {
      const locaPath = getFirstChildPath(subMenuList[1]);

      if (/^http/.test(locaPath || '')) {
        window.open(locaPath);
        return null;
      }
      pushHistory(locaPath);
    } else {
      pushHistory(url);
    }
  };

  return (
    <div ref={$header}>
      <Layout.Header
        id="nbugs-main-container-header"
        style={{
          lineHeight: '56px',
          height: '56px',
          width: '100 %',
          background: '#1785ec',
          display: 'flex',
          padding: 0,
        }}>
        <div className={classNames(styles.titleWrapper, {
          [styles.collapsed]: collapsed,
        })} ref={$titleWrapper}>
          {
            collapsed ? <MenuUnfoldOutlined className={styles.trigger} onClick={onCollapseMenu} />
              : <MenuFoldOutlined className={styles.trigger} onClick={onCollapseMenu} />
          }
          <span className={styles.subtitle}>{currentUser.schoolName}</span>
        </div>
        <div className={styles.rightWrapper}>
        
          <Menu
            className={styles.menu}
            mode="horizontal"
            theme="dark"
            selectedKeys={activeIndex === -1 ? [] : [`${activeIndex}`]}
            style={{
              background: 'transparent',
              color: '#fff',
              borderBottom: 0,
              overflow: 'visible',
              maxWidth: menuWidth,
            }}
          >
            {menuList.map(({ menuName, url }, index) => {
              return (
                <Menu.Item className={styles.menuItem} key={index} title={menuName} index={index}
                  style={{
                    color: '#fff',
                    borderBottom: 0,
                  }}
                  onClick={() => { handleSelect(index, url) }}
                >
                  {menuName}
                </Menu.Item>
              );
            })}
          </Menu>
          <div
            className={styles.right}
            ref={$right}
          >
            <Right
              currentUser={currentUser}
              schools={schools}
              isContact={isContact}

            />
          </div>
        </div>
      </Layout.Header >
    </div>
  );
};
