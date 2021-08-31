const appId = '0xyh';

const businessIds = {
  // 通讯录
  contact: 37,
};

const moduleIds = {
  notice: '01'
};

const eventIds = {
  click: '03'
};

const eventTrackDict = {
  contact: {
    classNotice: {
      confirm: `${appId}${moduleIds.notice}0002${eventIds.click}`,
      dealt: `${appId}${moduleIds.notice}0001${eventIds.click}`,
    },
  },
};

export { eventTrackDict, businessIds };
