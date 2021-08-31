export default [
  {
    'menuName': '首页',
    'url': '/',
  },

  {
    'url': '/contacts-v1',
    'menuName': '新-通讯录',
    'subMenus': [
      {
        'url': '/contacts-v1/internal',
        'menuName': '内部通讯录'
      },
      {
        'url': '/contacts-v1/family-school',
        'menuName': '家校通讯录'
      },
      {
        'url': '/contacts-v1/personnel',
        'menuName': '人员管理'
      },
      {
        'url': '/contacts-v1/department',
        'menuName': '部门岗位'
      },
      {
        'url': '/contacts-v1/subordinate',
        'menuName': '下属组织管理'
      },
      {
        'url': '/contacts-v1/person-tag',
        'menuName': '个人标签'
      },
      {
        'url': '/contacts-v1/currency-tag',
        'menuName': '通用标签'
      },
      {
        'url': '/contacts-v1/system-tag',
        'menuName': '系统标签'
      },
    ]
  },
  {
    'url': '/settings-v1',
    'menuName': '新-系统设置',
    'subMenus': [
      {
        'url': '/settings-v1/authority',
        'menuName': '权限系统'
      },
    ]
  },
  {
    'menuName': '系统设置',
    'url': '/settings',
    'subMenus': [
      {
        'menuName': '基础设置',
        'url': '/settings/basic',
      },
      {
        'menuName': '权限设置',
        'url': '/settings/admin',
      },
      {
        'menuName': '推送设置',
        'url': '/settings/message',
      },
      {
        'menuName': '操作日志',
        'url': '/settings/log',
      },
      {
        'menuName': '管理工具',
        'url': '/settings/tool',
      }
    ]
  },
  {
    'menuName': '使用分析',
    'url': '/analysis',
    'subMenus': [
      {
        'menuName': '整体概况',
        'url': '/analysis/general',
      },
      {
        'menuName': '应用活跃',
        'url': '/analysis/active',
      },
      {
        'menuName': '用户数据',
        'url': '/analysis/data',
      },
      {
        'menuName': '操作日志',
        'url': '/analysis/log',
      },
      {
        'menuName': '管理工具',
        'url': '/analysis/tool',
      }
    ]
  },
  {
    'menuName': '协同办公',
    'url': '/interactive',
    'subMenus': [
      {
        'menuName': '通知管理',
        'url': '/interactive/notice',
        'subMenus': [
          {
            'menuName': '历史数据',
            'url': '/interactive/notice/history',
          },
          {
            'url': '/interactive/notice/dataManage',
            'menuName': '数据管理'
          },
          {
            'url': '/interactive/notice/dataManage/create',
            'menuName': '新建通知'
          },
          {
            'url': '/interactive/notice/dataManage/detail',
            'menuName': '通知详情'
          },
          {
            'url': '/interactive/notice/dataManage/readDetail',
            'menuName': '阅读详情'
          },
          {
            'url': '/interactive/notice/outbox',
            'menuName': '发件箱'
          },
          {
            'url': '/interactive/notice/inbox',
            'menuName': '收件箱'
          },
          {
            'url': '/interactive/notice/create',
            'menuName': '新建通知'
          },
          {
            'url': '/interactive/notice/outbox/create',
            'menuName': '新建通知'
          },
          {
            'url': '/interactive/notice/outbox/detail',
            'menuName': '通知详情'
          },
          {
            'url': '/interactive/notice/outbox/readDetail',
            'menuName': '阅读详情'
          },
          {
            'url': '/interactive/notice/personalize',
            'menuName': '个性化群发'
          },
          {
            'url': '/interactive/notice/personalize/create',
            'menuName': '新建通知'
          },
          {
            'url': '/interactive/notice/personalize/detail',
            'menuName': '通知详情'
          },
          {
            'url': '/interactive/notice/personalize/readDetail',
            'menuName': '阅读详情'
          },
          {
            'url': '/interactive/notice/inbox/detail',
            'menuName': '通知详情'
          },
          {
            'url': '/interactive/notice/statistics',
            'menuName': '数据统计'
          }
        ]
      },
      {
        'menuName': '专项发布',
        'url': '/interactive/safeClock',
        'subMenus': [
          {
            'url': '/interactive/safeClock/dataManage',
            'menuName': '数据管理'
          },
          {
            'url': '/interactive/safeClock/dataManage/detail',
            'menuName': '发布详情'
          },
          {
            'url': '/interactive/safeClock/dataManage/create',
            'menuName': '新建发布'
          },
          {
            'url': '/interactive/safeClock/dataManage/detail/approve',
            'menuName': '流转情况'
          },
          {
            'url': '/interactive/safeClock/dataManage/readDetail',
            'menuName': '阅读详情'
          },
          {
            'url': '/interactive/safeClock/dataManage/packReadDetail',
            'menuName': '阅读详情'
          },
          {
            'url': '/interactive/safeClock/outbox',
            'menuName': '发件箱'
          },
          {
            'url': '/interactive/safeClock/eduTagPush',
            'menuName': '发件箱'
          },
          {
            'url': '/interactive/safeClock/inbox',
            'menuName': '收件箱'
          },
          {
            'url': '/interactive/safeClock/create',
            'menuName': '新建发布'
          },
          {
            'url': '/interactive/safeClock/outbox/create',
            'menuName': '新建发布'
          },
          {
            'url': '/interactive/safeClock/outbox/detail',
            'menuName': '发布详情'
          },
          {
            'url': '/interactive/safeClock/outbox/detail/approve',
            'menuName': '流转情况'
          },
          {
            'url': '/interactive/safeClock/outbox/readDetail',
            'menuName': '阅读详情'
          },
          {
            'url': '/interactive/safeClock/outbox/packReadDetail',
            'menuName': '统计查询'
          },
          {
            'url': '/interactive/safeClock/eduTagPush/create',
            'menuName': '新建发布'
          },
          {
            'url': '/interactive/safeClock/eduTagPush/detail',
            'menuName': '发布详情'
          },
          {
            'url': '/interactive/safeClock/eduTagPush/detail/approve',
            'menuName': '流转情况'
          },
          {
            'url': '/interactive/safeClock/eduTagPush/readDetail',
            'menuName': '阅读详情'
          },
          {
            'url': '/interactive/safeClock/eduTagPush/packReadDetail',
            'menuName': '统计查询'
          },
          {
            'url': '/interactive/safeClock/inbox/detail',
            'menuName': '发布详情'
          },
          {
            'url': '/interactive/safeClock/setting',
            'menuName': '设置'
          },
          {
            'url': '/interactive/safeClock/approve',
            'menuName': '审批'
          },
          {
            'url': '/interactive/safeClock/approve/form',
            'menuName': '表单'
          },
          {
            'url': '/interactive/safeClock/approve/detail',
            'menuName': '详情'
          }
        ]
      },
      {
        'menuName': '数据填报',
        'url': '/interactive/dataReport',
        'subMenus': [
          {
            'url': '/interactive/dataReport/setting',
            'menuName': '管理员设置'
          },
          {
            'url': '/interactive/dataReport/outbox',
            'menuName': '发件箱'
          },
          {
            'url': '/interactive/dataReport/dataManageList',
            'menuName': '数据管理'
          },
          {
            'url': '/interactive/dataReport/dataManageRead',
            'menuName': '数据管理'
          },
          {
            'url': '/interactive/dataReport/dataManageRead/readDetail',
            'menuName': '阅读详情'
          },
          {
            'url': '/interactive/dataReport/dataManageRead/detail',
            'menuName': '阅读详情'
          },
          {
            'url': '/interactive/dataReport/dataManageRead/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/dataReport/dataManageRead/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/dataReport/dataManageList/detail',
            'menuName': '详情'
          },
          {
            'url': '/interactive/dataReport/dataManageList/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/dataReport/dataManageList/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/dataReport/dataManageList/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/dataReport/outbox/detail',
            'menuName': '详情'
          },
          {
            'url': '/interactive/dataReport/outbox/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/dataReport/outbox/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/dataReport/outbox/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/dataReport/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/dataReport/inbox',
            'menuName': '收件箱'
          },
          {
            'url': '/interactive/dataReport/inbox/fill',
            'menuName': '详情'
          },
          {
            'url': '/interactive/dataReport/dataManage/subOrg',
            'menuName': '下级组织查询'
          },
          {
            'url': '/interactive/dataReport/dataManage/subOrg/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/dataReport/dataManage/subOrg/feedBack',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/dataReport/dataManage/subOrg/detail',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/dataReport/dataManage/subOrg/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/dataReport/dataManage/subOrg/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/dataReport/dataManage/curOrg',
            'menuName': '当前组织查询'
          },
          {
            'url': '/interactive/dataReport/dataManage/curOrg/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/dataReport/dataManage/curOrg/feedBack',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/dataReport/dataManage/curOrg/detail',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/dataReport/dataManage/curOrg/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/dataReport/dataManage/curOrg/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/dataReport/dataManage/curOrg/resumeQuery',
            'menuName': '复学码查询'
          },
          {
            'url': '/interactive/dataReport/dataManage/curDep',
            'menuName': '统计查询'
          },
          {
            'url': '/interactive/dataReport/dataManage/curDep/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/dataReport/dataManage/curDep/feedBack',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/dataReport/dataManage/curDep/detail',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/dataReport/dataManage/curDep/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/dataReport/dataManage/curDep/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/dataReport/template',
            'menuName': '模板库'
          },
          {
            'url': '/interactive/dataReport/template/subTemplate',
            'menuName': '文件夹列表'
          },
          {
            'url': '/interactive/dataReport/model',
            'menuName': '模板库'
          },
          {
            'url': '/interactive/dataReport/model/subTemplate',
            'menuName': '文件夹列表'
          },
          {
            'url': '/interactive/dataReport/model/edit',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/dataReport/model/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/dataReport/list',
            'menuName': '发件箱'
          },
          {
            'url': '/interactive/dataReport/list/edit',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/dataReport/list/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/dataReport/list/feedback',
            'menuName': '阅读/反馈'
          },
          {
            'url': '/interactive/dataReport/fill',
            'menuName': '填写问卷'
          },
          {
            'url': '/interactive/dataReport/receiptManagement',
            'menuName': '收件箱'
          },
          {
            'url': '/interactive/dataReport/subOrg',
            'menuName': '下级组织查询'
          },
          {
            'url': '/interactive/dataReport/subOrg/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/dataReport/subOrg/feedback',
            'menuName': '阅读/反馈'
          },
          {
            'url': '/interactive/dataReport/subOrg/edit',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/dataReport/subOrg/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/dataReport/curOrg',
            'menuName': '当前组织查询'
          },
          {
            'url': '/interactive/dataReport/curOrg/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/dataReport/curOrg/feedback',
            'menuName': '阅读/反馈'
          },
          {
            'url': '/interactive/dataReport/curOrg/edit',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/dataReport/curOrg/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/dataReport/resumeQuery',
            'menuName': '异常码查询'
          },
          {
            'url': '/interactive/dataReport/curOrg/resumeQuery',
            'menuName': '复学码查询'
          },
          {
            'url': '/interactive/dataReport/curDep',
            'menuName': '统计'
          },
          {
            'url': '/interactive/dataReport/curDep/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/dataReport/curDep/edit',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/dataReport/curDep/feedback',
            'menuName': '阅读/反馈'
          },
          {
            'url': '/interactive/dataReport/curDep/result',
            'menuName': '统计结果'
          }
        ]
      },
      {
        'menuName': '问卷收集',
        'url': '/interactive/surveyStatistics',
        'subMenus': [
          {
            'url': '/interactive/surveyStatistics/setting',
            'menuName': '管理员设置'
          },
          {
            'url': '/interactive/surveyStatistics/outbox',
            'menuName': '发件箱'
          },
          {
            'url': '/interactive/surveyStatistics/dataManageList',
            'menuName': '数据管理'
          },
          {
            'url': '/interactive/surveyStatistics/dataManageList/detail',
            'menuName': '详情'
          },
          {
            'url': '/interactive/surveyStatistics/dataManageList/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/surveyStatistics/dataManageList/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/surveyStatistics/dataManageList/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveyStatistics/outbox/detail',
            'menuName': '详情'
          },
          {
            'url': '/interactive/surveyStatistics/outbox/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/surveyStatistics/outbox/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveyStatistics/outbox/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/surveyStatistics/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveyStatistics/inbox',
            'menuName': '收件箱'
          },
          {
            'url': '/interactive/surveyStatistics/inbox/fill',
            'menuName': '详情'
          },
          {
            'url': '/interactive/surveyStatistics/dataManage/subOrg',
            'menuName': '下级组织查询'
          },
          {
            'url': '/interactive/surveyStatistics/dataManage/subOrg/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/surveyStatistics/dataManage/subOrg/detail',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveyStatistics/dataManage/subOrg/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveyStatistics/dataManage/subOrg/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/surveyStatistics/dataManage/curOrg',
            'menuName': '当前组织查询'
          },
          {
            'url': '/interactive/surveyStatistics/dataManage/curOrg/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/surveyStatistics/dataManage/curOrg/detail',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveyStatistics/dataManage/curOrg/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveyStatistics/dataManage/curOrg/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/surveyStatistics/dataManage/curOrg/resumeQuery',
            'menuName': '复学码查询'
          },
          {
            'url': '/interactive/surveyStatistics/dataManage/curDep',
            'menuName': '统计查询'
          },
          {
            'url': '/interactive/surveyStatistics/dataManage/curDep/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/surveyStatistics/dataManage/curDep/detail',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveyStatistics/dataManage/curDep/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveyStatistics/dataManage/curDep/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/surveyStatistics/template',
            'menuName': '模板库'
          },
          {
            'url': '/interactive/surveyStatistics/template/subTemplate',
            'menuName': '文件夹列表'
          }
        ]
      },
      {
        'menuName': '满意度调查',
        'url': '/interactive/surveySatisfaction',
        'subMenus': [
          {
            'url': '/interactive/surveySatisfaction/setting',
            'menuName': '管理员设置'
          },
          {
            'url': '/interactive/surveySatisfaction/outbox',
            'menuName': '发件箱'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManageList',
            'menuName': '数据管理'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManageList/detail',
            'menuName': '详情'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManageList/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManageList/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManageList/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveySatisfaction/outbox/detail',
            'menuName': '详情'
          },
          {
            'url': '/interactive/surveySatisfaction/outbox/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/surveySatisfaction/outbox/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveySatisfaction/outbox/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/surveySatisfaction/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveySatisfaction/inbox',
            'menuName': '收件箱'
          },
          {
            'url': '/interactive/surveySatisfaction/inbox/fill',
            'menuName': '详情'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManage/subOrg',
            'menuName': '下级组织查询'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManage/subOrg/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManage/subOrg/detail',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManage/subOrg/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManage/subOrg/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManage/curOrg',
            'menuName': '当前组织查询'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManage/curOrg/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManage/curOrg/detail',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManage/curOrg/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManage/curOrg/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManage/curOrg/resumeQuery',
            'menuName': '复学码查询'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManage/curDep',
            'menuName': '统计查询'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManage/curDep/readDetail',
            'menuName': '填报详情'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManage/curDep/detail',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManage/curDep/create',
            'menuName': '填写内容'
          },
          {
            'url': '/interactive/surveySatisfaction/dataManage/curDep/result',
            'menuName': '统计结果'
          },
          {
            'url': '/interactive/surveySatisfaction/template',
            'menuName': '模板库'
          },
          {
            'url': '/interactive/surveySatisfaction/template/subTemplate',
            'menuName': '文件夹列表'
          }
        ]
      },
      {
        'menuName': '会议管理',
        'url': '/interactive/meeting',
        'subMenus': [
          {
            'url': '/interactive/meeting/myRelease',
            'menuName': '我发布的'
          },
          {
            'url': '/interactive/meeting/dataManagement',
            'menuName': '数据管理'
          },
          {
            'url': '/interactive/meeting/myRelease/create',
            'menuName': '新建会议'
          },
          {
            'url': '/interactive/meeting/myRelease/edit',
            'menuName': '编辑会议'
          },
          {
            'url': '/interactive/meeting/dataManagement/create',
            'menuName': '新建会议'
          },
          {
            'url': '/interactive/meeting/dataManagement/edit',
            'menuName': '编辑会议'
          },
          {
            'url': '/interactive/meeting/myParticipant',
            'menuName': '我参会的'
          },
          {
            'url': '/interactive/meeting/myRelease/readDetail',
            'menuName': '阅读详情'
          },
          {
            'url': '/interactive/meeting/dataManagement/readDetail',
            'menuName': '阅读详情'
          },
          {
            'url': '/interactive/meeting/myRelease/meetingDetail',
            'menuName': '详情'
          },
          {
            'url': '/interactive/meeting/dataManagement/meetingDetail',
            'menuName': '详情'
          },
          {
            'url': '/interactive/meeting/myParticipant/meetingDetail',
            'menuName': '详情'
          },
          {
            'url': '/interactive/meeting/myParticipant/minutes',
            'menuName': '查看纪要'
          },
          {
            'url': '/interactive/meeting/myRelease/meetingDetail/minutes',
            'menuName': '查看纪要'
          },
          {
            'url': '/interactive/meeting/myParticipant/meetingDetail/minutes',
            'menuName': '查看纪要'
          },
          {
            'url': '/interactive/meeting/dataManagement/meetingDetail/minutes',
            'menuName': '查看纪要'
          },
          {
            'url': '/interactive/meeting/meetingRoom',
            'menuName': '会议室管理'
          },
          {
            'url': '/interactive/meeting/meetingRoom/editor',
            'menuName': '新建会议室'
          },
          {
            'url': '/interactive/meeting/roomResource',
            'menuName': '会议室预览'
          },
          {
            'url': '/interactive/meeting/serviceManage',
            'menuName': '会议服务管理'
          }
        ]
      },
      {
        'menuName': '行事历',
        'url': '/interactive/calendar/list',
        'subMenus': []
      }
    ]
  },
  {
    'menuName': '平安校园',
    'url': '/campusSafety',
    'subMenus': [
      {
        'menuName': '晨午检',
        'url': '/campusSafety/check',
        'subMenus': [
          {
            'url': '/campusSafety/check/report/list',
            'menuName': '统计报表'
          },
          {
            'url': '/campusSafety/check/report/list/detail',
            'menuName': '统计报表详情'
          },
          {
            'url': '/campusSafety/check/list',
            'menuName': '统计报表'
          }
        ]
      },
      {
        'menuName': '统计报表',
        'url': '/campusSafety/suikang',
        'subMenus': [
          {
            'url': '/campusSafety/suikang/list',
            'menuName': '穗康管理端'
          },
          {
            'url': '/campusSafety/suikang/check',
            'menuName': '穗康晨午检'
          }
        ]
      },
      {
        'menuName': '穗康晨午检',
        'url': '/campusSafety/suikangCheck',
        'subMenus': [
          {
            'url': '/campusSafety/suikangCheck/report/list',
            'menuName': '统计报表'
          },
          {
            'url': '/campusSafety/suikangCheck/list',
            'menuName': '统计报表'
          }
        ]
      },
      {
        'menuName': '寝室管理',
        'url': '/campusSafety/dorm',
        'subMenus': [
          {
            'url': '/campusSafety/dorm/dormBuilding',
            'menuName': '宿舍楼管理'
          },
          {
            'url': '/campusSafety/dorm/room',
            'menuName': '寝室房间管理'
          },
          {
            'url': '/campusSafety/dorm/registration',
            'menuName': '入住管理'
          },
          {
            'url': '/campusSafety/dorm/ruleManage',
            'menuName': '就寝规则管理'
          },
          {
            'url': '/campusSafety/dorm/ruleManage/nameAndObject',
            'menuName': '新建就寝规则'
          },
          {
            'url': '/campusSafety/dorm/ruleManage/dateAndTime',
            'menuName': '新建就寝规则'
          },
          {
            'url': '/campusSafety/dorm/ruleManage/pushSetting',
            'menuName': '新建就寝规则'
          },
          {
            'url': '/campusSafety/dorm/group',
            'menuName': '寝室管理组'
          },
          {
            'url': '/campusSafety/dorm/group/create',
            'menuName': '新建'
          },
          {
            'url': '/campusSafety/dorm/group/edit',
            'menuName': '编辑'
          }
        ]
      },
      {
        'menuName': '学生考勤',
        'url': '/campusSafety/studentAttendance',
        'subMenus': [
          {
            'url': '/campusSafety/studentAttendance/record',
            'menuName': '考勤记录查询'
          },
          {
            'url': '/campusSafety/studentAttendance/rulesManage',
            'menuName': '规则管理'
          },
          {
            'url': '/campusSafety/studentAttendance/rulesManage/rulesSetting',
            'menuName': '规则设置名称与对象'
          },
          {
            'url': '/campusSafety/studentAttendance/rulesManage/dateAndTime',
            'menuName': '规则设置日期与时间'
          },
          {
            'url': '/campusSafety/studentAttendance/rulesManage/pushSetting',
            'menuName': '规则推送设置'
          },
          {
            'url': '/campusSafety/studentAttendance/pushReportManage',
            'menuName': '安全报告推送管理'
          },
          {
            'url': '/campusSafety/studentAttendance/pushReportManage/pushRuleSetting',
            'menuName': '推送规则'
          }
        ]
      },
      {
        'menuName': '卡片配置',
        'url': '/campusSafety/card',
        'subMenus': [
          {
            'url': '/campusSafety/card/set',
            'menuName': '配卡'
          },
          {
            'url': '/campusSafety/card/upload',
            'menuName': '全校配卡'
          }
        ]
      },
      {
        'menuName': '考勤请假',
        'url': '/campusSafety/attendForLeave',
        'subMenus': [
          {
            'url': '/campusSafety/attendForLeave/rule',
            'menuName': '考勤规则'
          },
          {
            'url': '/campusSafety/attendForLeave/workCheck',
            'menuName': '考勤请假查询'
          }
        ]
      }
    ]
  },
  {
    'menuName': '教育局发布',
    'url': '/eduTagPush',
    'subMenus': [
      {
        'menuName': '专项发布',
        'url': '/eduTagPush/safeClock',
        'subMenus': [
          {
            'url': '/eduTagPush/safeClock/dataManage',
            'menuName': '数据管理'
          },
          {
            'url': '/eduTagPush/safeClock/dataManage/detail',
            'menuName': '发布详情'
          },
          {
            'url': '/eduTagPush/safeClock/dataManage/create',
            'menuName': '新建发布'
          },
          {
            'url': '/eduTagPush/safeClock/dataManage/detail/approve',
            'menuName': '流转情况'
          },
          {
            'url': '/eduTagPush/safeClock/dataManage/readDetail',
            'menuName': '阅读详情'
          },
          {
            'url': '/eduTagPush/safeClock/dataManage/packReadDetail',
            'menuName': '阅读详情'
          },
          {
            'url': '/eduTagPush/safeClock/outbox',
            'menuName': '发件箱'
          },
          {
            'url': '/eduTagPush/safeClock/eduTagPush',
            'menuName': '发件箱'
          },
          {
            'url': '/eduTagPush/safeClock/inbox',
            'menuName': '收件箱'
          },
          {
            'url': '/eduTagPush/safeClock/create',
            'menuName': '新建发布'
          },
          {
            'url': '/eduTagPush/safeClock/outbox/create',
            'menuName': '新建发布'
          },
          {
            'url': '/eduTagPush/safeClock/outbox/detail',
            'menuName': '发布详情'
          },
          {
            'url': '/eduTagPush/safeClock/outbox/detail/approve',
            'menuName': '流转情况'
          },
          {
            'url': '/eduTagPush/safeClock/outbox/readDetail',
            'menuName': '阅读详情'
          },
          {
            'url': '/eduTagPush/safeClock/outbox/packReadDetail',
            'menuName': '统计查询'
          },
          {
            'url': '/eduTagPush/safeClock/eduTagPush/create',
            'menuName': '新建发布'
          },
          {
            'url': '/eduTagPush/safeClock/eduTagPush/detail',
            'menuName': '发布详情'
          },
          {
            'url': '/eduTagPush/safeClock/eduTagPush/detail/approve',
            'menuName': '流转情况'
          },
          {
            'url': '/eduTagPush/safeClock/eduTagPush/readDetail',
            'menuName': '阅读详情'
          },
          {
            'url': '/eduTagPush/safeClock/eduTagPush/packReadDetail',
            'menuName': '统计查询'
          },
          {
            'url': '/eduTagPush/safeClock/inbox/detail',
            'menuName': '发布详情'
          },
          {
            'url': '/eduTagPush/safeClock/setting',
            'menuName': '设置'
          },
          {
            'url': '/eduTagPush/safeClock/approve',
            'menuName': '审批'
          },
          {
            'url': '/eduTagPush/safeClock/approve/form',
            'menuName': '表单'
          },
          {
            'url': '/eduTagPush/safeClock/approve/detail',
            'menuName': '详情'
          }
        ]
      }
    ]
  },
  {
    'menuName': '通知管理',
    'url': '/iframe/notice',
    'subMenus': [
      {
        'menuName': '历史数据',
        'url': '/iframe/notice/history',
      },
      {
        'url': '/iframe/notice/dataManage',
        'menuName': '数据管理'
      },
      {
        'url': '/iframe/notice/dataManage/create',
        'menuName': '新建通知'
      },
      {
        'url': '/iframe/notice/dataManage/detail',
        'menuName': '通知详情'
      },
      {
        'url': '/iframe/notice/dataManage/readDetail',
        'menuName': '阅读详情'
      },
      {
        'url': '/iframe/notice/outbox',
        'menuName': '发件箱'
      },
      {
        'url': '/iframe/notice/inbox',
        'menuName': '收件箱'
      },
      {
        'url': '/iframe/notice/create',
        'menuName': '新建通知'
      },
      {
        'url': '/iframe/notice/outbox/create',
        'menuName': '新建通知'
      },
      {
        'url': '/iframe/notice/outbox/detail',
        'menuName': '通知详情'
      },
      {
        'url': '/iframe/notice/outbox/readDetail',
        'menuName': '阅读详情'
      },
      {
        'url': '/iframe/notice/personalize',
        'menuName': '个性化群发'
      },
      {
        'url': '/iframe/notice/personalize/create',
        'menuName': '新建通知'
      },
      {
        'url': '/iframe/notice/personalize/detail',
        'menuName': '通知详情'
      },
      {
        'url': '/iframe/notice/personalize/readDetail',
        'menuName': '阅读详情'
      },
      {
        'url': '/iframe/notice/inbox/detail',
        'menuName': '通知详情'
      },
      {
        'url': '/iframe/notice/statistics',
        'menuName': '数据统计'
      }
    ]
  },
  {
    'menuName': '通知管理',
    'url': '/notice',
    'subMenus': [
      {
        'menuName': '历史数据',
        'url': '/notice/history',
      },
      {
        'url': '/notice/dataManage',
        'menuName': '数据管理'
      },
      {
        'url': '/notice/dataManage/create',
        'menuName': '新建通知'
      },
      {
        'url': '/notice/dataManage/detail',
        'menuName': '通知详情'
      },
      {
        'url': '/notice/dataManage/readDetail',
        'menuName': '阅读详情'
      },
      {
        'url': '/notice/outbox',
        'menuName': '发件箱'
      },
      {
        'url': '/notice/inbox',
        'menuName': '收件箱'
      },
      {
        'url': '/notice/create',
        'menuName': '新建通知'
      },
      {
        'url': '/notice/outbox/create',
        'menuName': '新建通知'
      },
      {
        'url': '/notice/outbox/detail',
        'menuName': '通知详情'
      },
      {
        'url': '/notice/outbox/readDetail',
        'menuName': '阅读详情'
      },
      {
        'url': '/notice/personalize',
        'menuName': '个性化群发'
      },
      {
        'url': '/notice/personalize/create',
        'menuName': '新建通知'
      },
      {
        'url': '/notice/personalize/detail',
        'menuName': '通知详情'
      },
      {
        'url': '/notice/personalize/readDetail',
        'menuName': '阅读详情'
      },
      {
        'url': '/notice/inbox/detail',
        'menuName': '通知详情'
      },
      {
        'url': '/notice/statistics',
        'menuName': '数据统计'
      }
    ]
  },
  {
    'menuName': '会议管理',
    'url': '/meeting',
    'subMenus': [
      {
        'url': '/meeting/myRelease',
        'menuName': '我发布的'
      },
      {
        'url': '/meeting/dataManagement',
        'menuName': '数据管理'
      },
      {
        'url': '/meeting/myRelease/create',
        'menuName': '新建会议'
      },
      {
        'url': '/meeting/myRelease/edit',
        'menuName': '编辑会议'
      },
      {
        'url': '/meeting/dataManagement/create',
        'menuName': '新建会议'
      },
      {
        'url': '/meeting/dataManagement/edit',
        'menuName': '编辑会议'
      },
      {
        'url': '/meeting/myParticipant',
        'menuName': '我参会的'
      },
      {
        'url': '/meeting/myRelease/readDetail',
        'menuName': '阅读详情'
      },
      {
        'url': '/meeting/dataManagement/readDetail',
        'menuName': '阅读详情'
      },
      {
        'url': '/meeting/myRelease/meetingDetail',
        'menuName': '详情'
      },
      {
        'url': '/meeting/dataManagement/meetingDetail',
        'menuName': '详情'
      },
      {
        'url': '/meeting/myParticipant/meetingDetail',
        'menuName': '详情'
      },
      {
        'url': '/meeting/myParticipant/minutes',
        'menuName': '查看纪要'
      },
      {
        'url': '/meeting/myRelease/meetingDetail/minutes',
        'menuName': '查看纪要'
      },
      {
        'url': '/meeting/myParticipant/meetingDetail/minutes',
        'menuName': '查看纪要'
      },
      {
        'url': '/meeting/dataManagement/meetingDetail/minutes',
        'menuName': '查看纪要'
      },
      {
        'url': '/meeting/meetingRoom',
        'menuName': '会议室管理'
      },
      {
        'url': '/meeting/meetingRoom/editor',
        'menuName': '新建会议室'
      },
      {
        'url': '/meeting/roomResource',
        'menuName': '会议室预览'
      },
      {
        'url': '/meeting/serviceManage',
        'menuName': '会议服务管理'
      }
    ]
  },
  {
    'menuName': '数据填报',
    'url': '/dataReport',
    'subMenus': [
      {
        'url': '/dataReport/setting',
        'menuName': '管理员设置'
      },
      {
        'url': '/dataReport/outbox',
        'menuName': '发件箱'
      },
      {
        'url': '/dataReport/dataManageList',
        'menuName': '数据管理'
      },
      {
        'url': '/dataReport/dataManageRead',
        'menuName': '数据管理'
      },
      {
        'url': '/dataReport/dataManageRead/readDetail',
        'menuName': '阅读详情'
      },
      {
        'url': '/dataReport/dataManageRead/detail',
        'menuName': '阅读详情'
      },
      {
        'url': '/dataReport/dataManageRead/result',
        'menuName': '统计结果'
      },
      {
        'url': '/dataReport/dataManageRead/create',
        'menuName': '填写内容'
      },
      {
        'url': '/dataReport/dataManageList/detail',
        'menuName': '详情'
      },
      {
        'url': '/dataReport/dataManageList/result',
        'menuName': '统计结果'
      },
      {
        'url': '/dataReport/dataManageList/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/dataReport/dataManageList/create',
        'menuName': '填写内容'
      },
      {
        'url': '/dataReport/outbox/detail',
        'menuName': '详情'
      },
      {
        'url': '/dataReport/outbox/result',
        'menuName': '统计结果'
      },
      {
        'url': '/dataReport/outbox/create',
        'menuName': '填写内容'
      },
      {
        'url': '/dataReport/outbox/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/dataReport/create',
        'menuName': '填写内容'
      },
      {
        'url': '/dataReport/inbox',
        'menuName': '收件箱'
      },
      {
        'url': '/dataReport/inbox/fill',
        'menuName': '详情'
      },
      {
        'url': '/dataReport/dataManage/subOrg',
        'menuName': '下级组织查询'
      },
      {
        'url': '/dataReport/dataManage/subOrg/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/dataReport/dataManage/subOrg/feedBack',
        'menuName': '填报详情'
      },
      {
        'url': '/dataReport/dataManage/subOrg/detail',
        'menuName': '填写内容'
      },
      {
        'url': '/dataReport/dataManage/subOrg/create',
        'menuName': '填写内容'
      },
      {
        'url': '/dataReport/dataManage/subOrg/result',
        'menuName': '统计结果'
      },
      {
        'url': '/dataReport/dataManage/curOrg',
        'menuName': '当前组织查询'
      },
      {
        'url': '/dataReport/dataManage/curOrg/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/dataReport/dataManage/curOrg/feedBack',
        'menuName': '填报详情'
      },
      {
        'url': '/dataReport/dataManage/curOrg/detail',
        'menuName': '填写内容'
      },
      {
        'url': '/dataReport/dataManage/curOrg/create',
        'menuName': '填写内容'
      },
      {
        'url': '/dataReport/dataManage/curOrg/result',
        'menuName': '统计结果'
      },
      {
        'url': '/dataReport/dataManage/curOrg/resumeQuery',
        'menuName': '复学码查询'
      },
      {
        'url': '/dataReport/dataManage/curDep',
        'menuName': '统计查询'
      },
      {
        'url': '/dataReport/dataManage/curDep/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/dataReport/dataManage/curDep/feedBack',
        'menuName': '填报详情'
      },
      {
        'url': '/dataReport/dataManage/curDep/detail',
        'menuName': '填写内容'
      },
      {
        'url': '/dataReport/dataManage/curDep/create',
        'menuName': '填写内容'
      },
      {
        'url': '/dataReport/dataManage/curDep/result',
        'menuName': '统计结果'
      },
      {
        'url': '/dataReport/template',
        'menuName': '模板库'
      },
      {
        'url': '/dataReport/template/subTemplate',
        'menuName': '文件夹列表'
      },
      {
        'url': '/dataReport/model',
        'menuName': '模板库'
      },
      {
        'url': '/dataReport/model/subTemplate',
        'menuName': '文件夹列表'
      },
      {
        'url': '/dataReport/model/edit',
        'menuName': '填写内容'
      },
      {
        'url': '/dataReport/model/result',
        'menuName': '统计结果'
      },
      {
        'url': '/dataReport/list',
        'menuName': '发件箱'
      },
      {
        'url': '/dataReport/list/edit',
        'menuName': '填写内容'
      },
      {
        'url': '/dataReport/list/result',
        'menuName': '统计结果'
      },
      {
        'url': '/dataReport/list/feedback',
        'menuName': '阅读/反馈'
      },
      {
        'url': '/dataReport/fill',
        'menuName': '填写问卷'
      },
      {
        'url': '/dataReport/receiptManagement',
        'menuName': '收件箱'
      },
      {
        'url': '/dataReport/subOrg',
        'menuName': '下级组织查询'
      },
      {
        'url': '/dataReport/subOrg/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/dataReport/subOrg/feedback',
        'menuName': '阅读/反馈'
      },
      {
        'url': '/dataReport/subOrg/edit',
        'menuName': '填写内容'
      },
      {
        'url': '/dataReport/subOrg/result',
        'menuName': '统计结果'
      },
      {
        'url': '/dataReport/curOrg',
        'menuName': '当前组织查询'
      },
      {
        'url': '/dataReport/curOrg/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/dataReport/curOrg/feedback',
        'menuName': '阅读/反馈'
      },
      {
        'url': '/dataReport/curOrg/edit',
        'menuName': '填写内容'
      },
      {
        'url': '/dataReport/curOrg/result',
        'menuName': '统计结果'
      },
      {
        'url': '/dataReport/resumeQuery',
        'menuName': '异常码查询'
      },
      {
        'url': '/dataReport/curOrg/resumeQuery',
        'menuName': '复学码查询'
      },
      {
        'url': '/dataReport/curDep',
        'menuName': '统计'
      },
      {
        'url': '/dataReport/curDep/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/dataReport/curDep/edit',
        'menuName': '填写内容'
      },
      {
        'url': '/dataReport/curDep/feedback',
        'menuName': '阅读/反馈'
      },
      {
        'url': '/dataReport/curDep/result',
        'menuName': '统计结果'
      }
    ]
  },
  {
    'menuName': '问卷收集',
    'url': '/surveyStatistics',
    'subMenus': [
      {
        'url': '/surveyStatistics/setting',
        'menuName': '管理员设置'
      },
      {
        'url': '/surveyStatistics/outbox',
        'menuName': '发件箱'
      },
      {
        'url': '/surveyStatistics/dataManageList',
        'menuName': '数据管理'
      },
      {
        'url': '/surveyStatistics/dataManageList/detail',
        'menuName': '详情'
      },
      {
        'url': '/surveyStatistics/dataManageList/result',
        'menuName': '统计结果'
      },
      {
        'url': '/surveyStatistics/dataManageList/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/surveyStatistics/dataManageList/create',
        'menuName': '填写内容'
      },
      {
        'url': '/surveyStatistics/outbox/detail',
        'menuName': '详情'
      },
      {
        'url': '/surveyStatistics/outbox/result',
        'menuName': '统计结果'
      },
      {
        'url': '/surveyStatistics/outbox/create',
        'menuName': '填写内容'
      },
      {
        'url': '/surveyStatistics/outbox/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/surveyStatistics/create',
        'menuName': '填写内容'
      },
      {
        'url': '/surveyStatistics/inbox',
        'menuName': '收件箱'
      },
      {
        'url': '/surveyStatistics/inbox/fill',
        'menuName': '详情'
      },
      {
        'url': '/surveyStatistics/dataManage/subOrg',
        'menuName': '下级组织查询'
      },
      {
        'url': '/surveyStatistics/dataManage/subOrg/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/surveyStatistics/dataManage/subOrg/detail',
        'menuName': '填写内容'
      },
      {
        'url': '/surveyStatistics/dataManage/subOrg/create',
        'menuName': '填写内容'
      },
      {
        'url': '/surveyStatistics/dataManage/subOrg/result',
        'menuName': '统计结果'
      },
      {
        'url': '/surveyStatistics/dataManage/curOrg',
        'menuName': '当前组织查询'
      },
      {
        'url': '/surveyStatistics/dataManage/curOrg/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/surveyStatistics/dataManage/curOrg/detail',
        'menuName': '填写内容'
      },
      {
        'url': '/surveyStatistics/dataManage/curOrg/create',
        'menuName': '填写内容'
      },
      {
        'url': '/surveyStatistics/dataManage/curOrg/result',
        'menuName': '统计结果'
      },
      {
        'url': '/surveyStatistics/dataManage/curOrg/resumeQuery',
        'menuName': '复学码查询'
      },
      {
        'url': '/surveyStatistics/dataManage/curDep',
        'menuName': '统计查询'
      },
      {
        'url': '/surveyStatistics/dataManage/curDep/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/surveyStatistics/dataManage/curDep/detail',
        'menuName': '填写内容'
      },
      {
        'url': '/surveyStatistics/dataManage/curDep/create',
        'menuName': '填写内容'
      },
      {
        'url': '/surveyStatistics/dataManage/curDep/result',
        'menuName': '统计结果'
      },
      {
        'url': '/surveyStatistics/template',
        'menuName': '模板库'
      },
      {
        'url': '/surveyStatistics/template/subTemplate',
        'menuName': '文件夹列表'
      }
    ]
  },
  {
    'menuName': '满意度调查',
    'url': '/surveySatisfaction',
    'subMenus': [
      {
        'url': '/surveySatisfaction/setting',
        'menuName': '管理员设置'
      },
      {
        'url': '/surveySatisfaction/outbox',
        'menuName': '发件箱'
      },
      {
        'url': '/surveySatisfaction/dataManageList',
        'menuName': '数据管理'
      },
      {
        'url': '/surveySatisfaction/dataManageList/detail',
        'menuName': '详情'
      },
      {
        'url': '/surveySatisfaction/dataManageList/result',
        'menuName': '统计结果'
      },
      {
        'url': '/surveySatisfaction/dataManageList/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/surveySatisfaction/dataManageList/create',
        'menuName': '填写内容'
      },
      {
        'url': '/surveySatisfaction/outbox/detail',
        'menuName': '详情'
      },
      {
        'url': '/surveySatisfaction/outbox/result',
        'menuName': '统计结果'
      },
      {
        'url': '/surveySatisfaction/outbox/create',
        'menuName': '填写内容'
      },
      {
        'url': '/surveySatisfaction/outbox/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/surveySatisfaction/create',
        'menuName': '填写内容'
      },
      {
        'url': '/surveySatisfaction/inbox',
        'menuName': '收件箱'
      },
      {
        'url': '/surveySatisfaction/inbox/fill',
        'menuName': '详情'
      },
      {
        'url': '/surveySatisfaction/dataManage/subOrg',
        'menuName': '下级组织查询'
      },
      {
        'url': '/surveySatisfaction/dataManage/subOrg/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/surveySatisfaction/dataManage/subOrg/detail',
        'menuName': '填写内容'
      },
      {
        'url': '/surveySatisfaction/dataManage/subOrg/create',
        'menuName': '填写内容'
      },
      {
        'url': '/surveySatisfaction/dataManage/subOrg/result',
        'menuName': '统计结果'
      },
      {
        'url': '/surveySatisfaction/dataManage/curOrg',
        'menuName': '当前组织查询'
      },
      {
        'url': '/surveySatisfaction/dataManage/curOrg/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/surveySatisfaction/dataManage/curOrg/detail',
        'menuName': '填写内容'
      },
      {
        'url': '/surveySatisfaction/dataManage/curOrg/create',
        'menuName': '填写内容'
      },
      {
        'url': '/surveySatisfaction/dataManage/curOrg/result',
        'menuName': '统计结果'
      },
      {
        'url': '/surveySatisfaction/dataManage/curOrg/resumeQuery',
        'menuName': '复学码查询'
      },
      {
        'url': '/surveySatisfaction/dataManage/curDep',
        'menuName': '统计查询'
      },
      {
        'url': '/surveySatisfaction/dataManage/curDep/readDetail',
        'menuName': '填报详情'
      },
      {
        'url': '/surveySatisfaction/dataManage/curDep/detail',
        'menuName': '填写内容'
      },
      {
        'url': '/surveySatisfaction/dataManage/curDep/create',
        'menuName': '填写内容'
      },
      {
        'url': '/surveySatisfaction/dataManage/curDep/result',
        'menuName': '统计结果'
      },
      {
        'url': '/surveySatisfaction/template',
        'menuName': '模板库'
      },
      {
        'url': '/surveySatisfaction/template/subTemplate',
        'menuName': '文件夹列表'
      }
    ]
  },
  {
    'url': '/contacts',
    'menuName': '通讯录',
    'subMenus': [
      {
        'url': '/contacts/list',
        'menuName': '通讯录'
      },
      {
        'url': '/contacts/department',
        'menuName': '部门管理'
      },
      {
        'url': '/contacts/subDept',
        'menuName': '部门管理-下级部门'
      },
      {
        'url': '/contacts/departmentType',
        'menuName': '部门类型管理'
      },
      {
        'url': '/contacts/personnel',
        'menuName': '人员管理'
      },
      {
        'url': '/contacts/personnel/setting',
        'menuName': '字段设置'
      },
      {
        'url': '/contacts/personnel/edit',
        'menuName': '编辑'
      },
      {
        'url': '/contacts/role',
        'menuName': '部门岗位'
      },
      {
        'url': '/contacts/import',
        'menuName': '导入'
      },
      {
        'url': '/contacts/import/student/dept',
        'menuName': '学生导入-节点匹配'
      },
      {
        'url': '/contacts/abnormal',
        'menuName': '异常数据处理'
      },
      {
        'url': '/contacts/tags',
        'menuName': '标签管理',
        'subMenus': [
          {
            'url': '/contacts/tags/index',
            'menuName': '通用标签'
          },
          {
            'url': '/contacts/tags/user',
            'menuName': '标签用户'
          },
          {
            'url': '/contacts/tags/personal',
            'menuName': '个人标签'
          }
        ]
      },
      {
        'url': '/contacts/tool',
        'menuName': '异常问题修复'
      }
    ]
  },
  {
    'url': '/countyContacts',
    'menuName': '通讯录',
    'subMenus': [
      {
        'url': '/countyContacts/list',
        'menuName': '通讯录'
      },
      {
        'url': '/countyContacts/department',
        'menuName': '部门管理'
      },
      {
        'url': '/countyContacts/subDept',
        'menuName': '部门管理-下级部门'
      },
      {
        'url': '/countyContacts/departmentType',
        'menuName': '部门类型管理'
      },
      {
        'url': '/countyContacts/grouping',
        'menuName': '分组管理'
      },
      {
        'url': '/countyContacts/subGroup',
        'menuName': '分组管理-下级分组'
      },
      {
        'url': '/countyContacts/personnel',
        'menuName': '人员管理'
      },
      {
        'url': '/countyContacts/personnel/setting',
        'menuName': '字段设置'
      },
      {
        'url': '/countyContacts/personnel/edit',
        'menuName': '编辑'
      },
      {
        'url': '/countyContacts/role',
        'menuName': '人员岗位设置'
      },
      {
        'url': '/countyContacts/import',
        'menuName': '\b导入'
      },
      {
        'url': '/countyContacts/import/student/dept',
        'menuName': '学生导入-节点匹配'
      },
      {
        'url': '/countyContacts/abnormal',
        'menuName': '异常数据处理'
      },
      {
        'url': '/countyContacts/subSchools',
        'menuName': '下属学校管理'
      },
      {
        'url': '/countyContacts/tags',
        'menuName': '标签管理',
        'subMenus': [
          {
            'url': '/countyContacts/tags/index',
            'menuName': '通用标签'
          },
          {
            'url': '/countyContacts/tags/user',
            'menuName': '标签用户'
          },
          {
            'url': '/countyContacts/tags/personal',
            'menuName': '个人标签'
          },
          {
            'url': '/countyContacts/tags/sys_user',
            'menuName': '系统标签人员'
          },
          {
            'url': '/countyContacts/tags/system',
            'menuName': '系统标签'
          }
        ]
      },
      {
        'url': '/countyContacts/tool',
        'menuName': '异常问题修复'
      }
    ]
  },
  {
    'menuName': '宣传管理',
    'url': '/microsite',
    'subMenus': [
      {
        'url': '/microsite/submissions',
        'menuName': '资讯发布',
        'subMenus': [
          {
            'url': '/microsite/submissions/submissions',
            'menuName': '新建资讯'
          },
          {
            'url': '/microsite/submissions/submissions/edit',
            'menuName': '编辑'
          },
          {
            'url': '/microsite/submissions/submissions/create',
            'menuName': '新建'
          },
          {
            'url': '/microsite/submissions/submissions/approvalDetail',
            'menuName': '查看'
          },
          {
            'url': '/microsite/submissions/submissions/approvalDetail/workflow',
            'menuName': '流转记录'
          },
          {
            'url': '/microsite/submissions/editCheck',
            'menuName': '资讯发布'
          },
          {
            'url': '/microsite/submissions/editCheck/approvalDetail',
            'menuName': '查看'
          },
          {
            'url': '/microsite/submissions/editCheck/approvalDetail/workflow',
            'menuName': '流转记录'
          },
          {
            'url': '/microsite/submissions/list',
            'menuName': '资讯审批'
          },
          {
            'url': '/microsite/submissions/list/form',
            'menuName': '表单'
          },
          {
            'url': '/microsite/submissions/list/detail',
            'menuName': '审批详情'
          }
        ]
      },
      {
        'url': '/microsite/publish',
        'menuName': '资讯管理',
        'subMenus': [
          {
            'url': '/microsite/publish/leaveWord',
            'menuName': '留言管理'
          },
          {
            'url': '/microsite/publish/list',
            'menuName': '资讯管理'
          },
          {
            'url': '/microsite/publish/list/readDetail',
            'menuName': '阅读详情'
          },
          {
            'url': '/microsite/publish/list/edit',
            'menuName': '编辑'
          },
          {
            'url': '/microsite/publish/list/batchPush',
            'menuName': '批量推送'
          },
          {
            'url': '/microsite/publish/list/publicMass',
            'menuName': '群发至公众号'
          },
          {
            'url': '/microsite/publish/list/approvalDetail',
            'menuName': '查看'
          },
          {
            'url': '/microsite/publish/list/approvalDetail/workflow',
            'menuName': '流转记录'
          },
          {
            'url': '/microsite/publish/countyList',
            'menuName': '资讯管理'
          },
          {
            'url': '/microsite/publish/countyList/readDetail',
            'menuName': '阅读详情'
          },
          {
            'url': '/microsite/publish/countyList/edit',
            'menuName': '编辑'
          },
          {
            'url': '/microsite/publish/countyList/batchPush',
            'menuName': '推送'
          },
          {
            'url': '/microsite/publish/countyList/publicMass',
            'menuName': '群发至公众号'
          },
          {
            'url': '/microsite/publish/countyList/approvalDetail',
            'menuName': '查看'
          },
          {
            'url': '/microsite/publish/countyList/approvalDetail/workflow',
            'menuName': '流转记录'
          }
        ]
      },
      {
        'url': '/microsite/operateRecord',
        'menuName': '操作记录',
        'subMenus': [
          {
            'url': '/microsite/operateRecord/allSync',
            'menuName': '同步记录'
          },
          {
            'url': '/microsite/operateRecord/allSync/approvalDetail',
            'menuName': '查看'
          },
          {
            'url': '/microsite/operateRecord/allSync/approvalDetail/workflow',
            'menuName': '流转记录'
          },
          {
            'url': '/microsite/operateRecord/record',
            'menuName': '上报记录'
          },
          {
            'url': '/microsite/operateRecord/record/approvalDetail',
            'menuName': '查看'
          },
          {
            'url': '/microsite/operateRecord/record/approvalDetail/workflow',
            'menuName': '流转记录'
          },
          {
            'url': '/microsite/operateRecord/pushRecord',
            'menuName': '推送记录'
          },
          {
            'url': '/microsite/operateRecord/pushRecord/approvalDetail/workflow',
            'menuName': '流转记录'
          },
          {
            'url': '/microsite/operateRecord/massRecord',
            'menuName': '群发记录'
          }
        ]
      },
      {
        'url': '/microsite/webSet',
        'menuName': '设置',
        'subMenus': [
          {
            'url': '/microsite/webSet/HomeSet',
            'menuName': '模版设置'
          },
          {
            'url': '/microsite/webSet/columnSet',
            'menuName': '栏目设置'
          },
          {
            'url': '/microsite/webSet/pushSet',
            'menuName': '推送设置'
          },
          {
            'url': '/microsite/webSet/labelSet',
            'menuName': '标签设置'
          },
          {
            'url': '/microsite/webSet/webSet',
            'menuName': '基本设置'
          },
          {
            'url': '/microsite/webSet/publicSet',
            'menuName': '公众号设置'
          }
        ]
      },
      {
        'url': '/microsite/manuscriptCount',
        'menuName': '文章统计',
        'subMenus': [
          {
            'url': '/microsite/manuscriptCount/school',
            'menuName': '全区统计'
          },
          {
            'url': '/microsite/manuscriptCount/correspondent',
            'menuName': '通讯员文章统计'
          }
        ]
      },
      {
        'url': '/microsite/schoolMatrix',
        'menuName': '全区官网',
        'subMenus': [
          {
            'url': '/microsite/schoolMatrix/schoolMatrix',
            'menuName': '官网联盟'
          },
          {
            'url': '/microsite/schoolMatrix/latestNews',
            'menuName': '全区资讯'
          }
        ]
      }
    ]
  },
  {
    'menuName': '工作流',
    'url': '/workFlow',
    'subMenus': [
      {
        'url': '/workFlow/home',
        'menuName': '首页'
      },
      {
        'url': '/workFlow/default',
        'menuName': '首页'
      },
      {
        'url': '/workFlow/default/formConfig',
        'menuName': '表单设计'
      },
      {
        'url': '/workFlow/default/flowConfig',
        'menuName': '流程设定'
      },
      {
        'url': '/workFlow/default/preView',
        'menuName': '预览'
      },
      {
        'url': '/workFlow/home/formConfig',
        'menuName': '表单设计'
      },
      {
        'url': '/workFlow/home/flowConfig',
        'menuName': '流程设定'
      },
      {
        'url': '/workFlow/home/preView',
        'menuName': '预览'
      },
      {
        'url': '/workFlow/appList',
        'menuName': '应用列表'
      },
      {
        'url': '/workFlow/appList/detail',
        'menuName': '工作流列表'
      },
      {
        'url': '/workFlow/appList/detail/formConfig',
        'menuName': '表单设计'
      },
      {
        'url': '/workFlow/appList/detail/flowConfig',
        'menuName': '流程设定'
      },
      {
        'url': '/workFlow/appList/detail/preView',
        'menuName': '预览'
      },
      {
        'url': '/workFlow/statisticalExport',
        'menuName': '统计导出'
      },
      {
        'url': '/workFlow/workflowList',
        'menuName': '工作流列表'
      },
      {
        'url': '/workFlow/workflowList/statisticalData',
        'menuName': '统计导出'
      },
      {
        'url': '/workFlow/list',
        'menuName': '列表',
        'disabled': true
      },
      {
        'url': '/workFlow/list/form',
        'menuName': '表单'
      },
      {
        'url': '/workFlow/list/detail',
        'menuName': '详情'
      }
    ]
  },
  {
    'menuName': '专项发布',
    'url': '/safeClock',
    'subMenus': [
      {
        'url': '/safeClock/dataManage',
        'menuName': '数据管理'
      },
      {
        'url': '/safeClock/dataManage/detail',
        'menuName': '发布详情'
      },
      {
        'url': '/safeClock/dataManage/create',
        'menuName': '新建发布'
      },
      {
        'url': '/safeClock/dataManage/detail/approve',
        'menuName': '流转情况'
      },
      {
        'url': '/safeClock/dataManage/readDetail',
        'menuName': '阅读详情'
      },
      {
        'url': '/safeClock/dataManage/packReadDetail',
        'menuName': '阅读详情'
      },
      {
        'url': '/safeClock/outbox',
        'menuName': '发件箱'
      },
      {
        'url': '/safeClock/eduTagPush',
        'menuName': '发件箱'
      },
      {
        'url': '/safeClock/inbox',
        'menuName': '收件箱'
      },
      {
        'url': '/safeClock/create',
        'menuName': '新建发布'
      },
      {
        'url': '/safeClock/outbox/create',
        'menuName': '新建发布'
      },
      {
        'url': '/safeClock/outbox/detail',
        'menuName': '发布详情'
      },
      {
        'url': '/safeClock/outbox/detail/approve',
        'menuName': '流转情况'
      },
      {
        'url': '/safeClock/outbox/readDetail',
        'menuName': '阅读详情'
      },
      {
        'url': '/safeClock/outbox/packReadDetail',
        'menuName': '统计查询'
      },
      {
        'url': '/safeClock/eduTagPush/create',
        'menuName': '新建发布'
      },
      {
        'url': '/safeClock/eduTagPush/detail',
        'menuName': '发布详情'
      },
      {
        'url': '/safeClock/eduTagPush/detail/approve',
        'menuName': '流转情况'
      },
      {
        'url': '/safeClock/eduTagPush/readDetail',
        'menuName': '阅读详情'
      },
      {
        'url': '/safeClock/eduTagPush/packReadDetail',
        'menuName': '统计查询'
      },
      {
        'url': '/safeClock/inbox/detail',
        'menuName': '发布详情'
      },
      {
        'url': '/safeClock/setting',
        'menuName': '设置'
      },
      {
        'url': '/safeClock/approve',
        'menuName': '审批'
      },
      {
        'url': '/safeClock/approve/form',
        'menuName': '表单'
      },
      {
        'url': '/safeClock/approve/detail',
        'menuName': '详情'
      }
    ]
  },
  {
    'menuName': '晨午检',
    'url': '/check',
    'subMenus': [
      {
        'url': '/check/report/list',
        'menuName': '统计报表'
      },
      {
        'url': '/check/report/list/detail',
        'menuName': '统计报表详情'
      },
      {
        'url': '/check/list',
        'menuName': '统计报表'
      }
    ]
  },
  {
    'menuName': '教育督导',
    'url': '/supervision',
    'subMenus': [
      {
        'url': '/supervision/norm',
        'menuName': '指标填报',
        'subMenus': [
          {
            'url': '/supervision/norm/management',
            'menuName': '指标模版',
          },
          {
            'url': '/supervision/norm/evaluation',
            'menuName': '专家评估'
          },
          {
            'url': '/supervision/norm/project',
            'menuName': '项目管理'
          },
          {
            'url': '/supervision/norm/project/edit',
            'menuName': '编辑/新建'
          },
          {
            'url': '/supervision/norm/project/overview',
            'menuName': '项目概述'
          },
          {
            'url': '/supervision/norm/project/criterion',
            'menuName': '评估标准'
          },
          {
            'url': '/supervision/norm/settings',
            'menuName': '指标设置',
          }
        ]
      },
      {
        'url': '/supervision/project',
        'menuName': '项目管理',
        'subMenus': [
          {
            'url': '/supervision/project/member',
            'menuName': '项目成员'
          },
          {
            'url': '/supervision/project/target',
            'menuName': '项目督查对象'
          },
          {
            'url': '/supervision/project/setting',
            'menuName': '项目设置'
          },
          {
            'url': '/supervision/project/evaluate',
            'menuName': '项目评估设置'
          },
          {
            'url': '/supervision/project/evaluateProcess',
            'menuName': '项目评估进度'
          }
        ]
      },
      {
        'url': '/supervision/evaluation/overviewSpecial',
        'menuName': '项目概述'
      },
      {
        'url': '/supervision/evaluation/my',
        'menuName': ''
      },
      {
        'url': '/supervision/evaluation/tree',
        'menuName': ''
      },
      {
        'url': '/supervision/evaluation/evaluateTree',
        'menuName': '评估指标树'
      },
      {
        'url': '/supervision/self',
        'menuName': '自查自评'
      },
      {
        'url': '/supervision/self/my',
        'menuName': ''
      },
      {
        'url': '/supervision/self/tree',
        'menuName': ''
      },
      {
        'url': '/supervision/field',
        'menuName': '实地督查'
      },
      {
        'url': '/supervision/field/tree',
        'menuName': ''
      },
      {
        'url': '/supervision/team',
        'menuName': '督导团队管理',
        'subMenus': [
          {
            'url': '/supervision/team/introduce',
            'menuName': '功能介绍'
          },
          {
            'url': '/supervision/team/display',
            'menuName': '督学展示'
          },
          {
            'url': '/supervision/team/statistics',
            'menuName': '督学统计'
          },
          {
            'url': '/supervision/team/analysis',
            'menuName': '督学分析'
          }
        ]
      },
      {
        'url': '/supervision/work',
        'menuName': '督学工作管理',
        'subMenus': [
          {
            'url': '/supervision/work/statistics',
            'menuName': '统计报表'
          },
          {
            'url': '/supervision/work/introduce',
            'menuName': '功能介绍'
          },
          {
            'url': '/supervision/work/log',
            'menuName': '督学工作日志查询'
          },
          {
            'url': '/supervision/work/efficiency',
            'menuName': '督学工作效率分析'
          },
          {
            'url': '/supervision/work/business',
            'menuName': '督学业务指标分析'
          }
        ]
      }
    ]
  },
  {
    'url': '/o2oa',
    'menuName': '办公OA',
    'subMenus': [
      {
        'url': '/o2oa/newapply',
        'menuName': '新建申请'
      },
      {
        'url': '/o2oa/myapply',
        'menuName': '我的申请'
      },
      {
        'url': '/o2oa/todo',
        'menuName': '待办公文'
      },
      {
        'url': '/o2oa/done',
        'menuName': '已办公文'
      },
      {
        'url': '/o2oa/all',
        'menuName': '所有公文'
      },
      {
        'url': '/o2oa/transfer',
        'menuName': '办结公文'
      },
      {
        'url': '/o2oa/myapprove',
        'menuName': '我的审批'
      },
      {
        'url': '/o2oa/classification',
        'menuName': '公文分类',
        'subMenus': [
          {
            'url': '/o2oa/classification/prose',
            'menuName': '1.机关行文呈批'
          },
          {
            'url': '/o2oa/classification/addressee',
            'menuName': '2.机关收文呈批'
          },
          {
            'url': '/o2oa/classification/instructionsForMatters',
            'menuName': '3.请示（事项类）'
          },
          {
            'url': '/o2oa/classification/instructionsForFunding',
            'menuName': '4.请示（经费类）'
          },
          {
            'url': '/o2oa/classification/chapter',
            'menuName': '5.用章申请'
          },
          {
            'url': '/o2oa/classification/leadershipGoOut',
            'menuName': '6.校级干部外出报备'
          },
          {
            'url': '/o2oa/classification/studentsGoOut',
            'menuName': '7.学生集体外出报备'
          },
          {
            'url': '/o2oa/classification/groupActivity',
            'menuName': '8.校内集体活动报备'
          },
          {
            'url': '/o2oa/classification/workerGoOut',
            'menuName': '9.公办教职工外出报备'
          },
          {
            'url': '/o2oa/classification/organizeSocialScience',
            'menuName': '10.组织社科职论坛报备'
          }
        ]
      }
    ]
  },
  {
    'url': '/oa',
    'menuName': '办公OA',
    'subMenus': [
      {
        'url': '/oa/newapply',
        'menuName': '新建申请'
      },
      {
        'url': '/oa/myapply',
        'menuName': '我的申请'
      },
      {
        'url': '/oa/todo',
        'menuName': '待办公文'
      },
      {
        'url': '/oa/done',
        'menuName': '已办公文'
      },
      {
        'url': '/oa/all',
        'menuName': '所有公文'
      },
      {
        'url': '/oa/transfer',
        'menuName': '办结公文'
      },
      {
        'url': '/oa/myCollection',
        'menuName': '我的收藏'
      },
      {
        'url': '/oa/myDraft',
        'menuName': '我的草稿'
      },
      {
        'url': '/oa/myapprove',
        'menuName': '我的审批'
      },
      {
        'url': '/oa/classification',
        'menuName': '公文分类',
        'subMenus': [
          {
            'url': '/oa/classification/prose',
            'menuName': '1.行文呈批'
          },
          {
            'url': '/oa/classification/addressee',
            'menuName': '2.收文呈批'
          },
          {
            'url': '/oa/classification/instructionsForMatters',
            'menuName': '3.请示（事项类）'
          },
          {
            'url': '/oa/classification/instructionsForFunding',
            'menuName': '4.请示（经费类）'
          },
          {
            'url': '/oa/classification/chapter',
            'menuName': '5.用章申请'
          },
          {
            'url': '/oa/classification/leadershipGoOut',
            'menuName': '6.校级干部外出报备'
          },
          {
            'url': '/oa/classification/studentsGoOut',
            'menuName': '7.学生集体外出报备'
          },
          {
            'url': '/oa/classification/groupActivity',
            'menuName': '8.校内集体活动报备'
          },
          {
            'url': '/oa/classification/workerGoOut',
            'menuName': '9.公办学校教职工集体外出报备'
          },
          {
            'url': '/oa/classification/organizeSocialScience',
            'menuName': '10.组织社科论坛审批报备'
          },
          {
            'url': '/oa/classification/bureauIssue',
            'menuName': '11.教育局发文'
          },
          {
            'url': '/oa/classification/schoolIssue',
            'menuName': '12.学校发文'
          }
        ]
      }
    ]
  },
  {
    'menuName': '行事历',
    'url': '/calendar/list',
  },
  {
    'menuName': '统计报表',
    'url': '/suikang',
    'subMenus': [
      {
        'url': '/suikang/list',
        'menuName': '穗康管理端'
      },
      {
        'url': '/suikang/check',
        'menuName': '穗康晨午检'
      }
    ]
  },
  {
    'menuName': '教学教务',
    'url': '/teaching',
    'subMenus': [
      {
        'menuName': '成绩管理',
        'url': '/teaching/score',
        'subMenus': [
          {
            'menuName': '考试记录',
            'url': '/teaching/score/record',
          },
          {
            'menuName': '设置',
            'url': '/teaching/score/setting',
          }
        ]
      },
      {
        'menuName': '课表管理',
        'url': '/teaching/schedule',
        'subMenus': [
          {
            'menuName': '课表设置',
            'url': '/teaching/schedule/setting',
          },
          {
            'menuName': '课节设置',
            'url': '/teaching/schedule/lesson',
          },
          {
            'menuName': '地点管理',
            'url': '/teaching/schedule/address',
          }
        ]
      },
      {
        'menuName': '在线选课',
        'url': '/teaching/selectCourse',
      },
      {
        'menuName': '德育评价',
        'url': '/teaching/evaluate',
        'subMenus': [
          {
            'menuName': '评价规则',
            'url': '/teaching/evaluate/rules',
          },
          {
            'menuName': '评价统计',
            'url': '/teaching/evaluate/analyze',
          },
          {
            'menuName': '评价记录',
            'url': '/teaching/evaluate/record',
          },
          {
            'menuName': '数据汇总',
            'url': '/teaching/evaluate/summary',
          },
          {
            'menuName': '德育活动',
            'url': '/teaching/evaluate/activity',
          },
          {
            'menuName': '设置',
            'url': '/teaching/evaluate/set',
          }
        ]
      }
    ]
  },
  {
    'menuName': '行政后勤',
    'url': '/logistic',
    'subMenus': [
      {
        'menuName': '工资条',
        'url': '/logistic/wages',
        'subMenus': [
          {
            'menuName': '工资条管理',
            'url': '/logistic/wages/management',
          },
          {
            'menuName': '详情',
            'url': '/logistic/wages/management/detail',
          },
          {
            'menuName': '统计详情',
            'url': '/logistic/wages/management/readDetail',
          },
          {
            'url': '/logistic/wages/management/edit',
            'menuName': '编辑工资条'
          },
          {
            'url': '/logistic/wages/create',
            'menuName': '新建工资条'
          },
          {
            'menuName': '我的工资条',
            'url': '/logistic/wages/mySalary',
          },
          {
            'menuName': '详情',
            'url': '/logistic/wages/mySalary/detail',
          },
          {
            'menuName': '操作日志',
            'url': '/logistic/wages/operationLogs',
          }
        ]
      },
      {
        'menuName': '工资条',
        'url': '/logistic/salary',
        'subMenus': [
          {
            'menuName': '工资条管理',
            'url': '/logistic/salary/manage',
          },
          {
            'menuName': '操作日志',
            'url': '/logistic/salary/logs',
          },
          {
            'menuName': '设置',
            'url': '/logistic/salary/setting',
          },
          {
            'menuName': '工资条管理',
            'url': '/logistic/salary/management',
          },
          {
            'menuName': '详情',
            'url': '/logistic/salary/management/detail',
          },
          {
            'menuName': '统计详情',
            'url': '/logistic/salary/management/readDetail',
          },
          {
            'url': '/logistic/salary/management/edit',
            'menuName': '编辑工资条'
          },
          {
            'url': '/logistic/salary/create',
            'menuName': '新建工资条'
          },
          {
            'menuName': '我的工资条',
            'url': '/logistic/salary/mySalary',
          },
          {
            'menuName': '详情',
            'url': '/logistic/salary/mySalary/detail',
          },
          {
            'menuName': '操作日志',
            'url': '/logistic/salary/operationLogs',
          }
        ]
      },
      {
        'menuName': '物品报修',
        'url': '/logistic/article',
        'subMenus': [
          {
            'menuName': '已处理',
            'url': '/logistic/article/processed',
          },
          {
            'menuName': '待处理',
            'url': '/logistic/article/pending',
          },
          {
            'menuName': '数据分析',
            'url': '/logistic/article/analysis',
          },
          {
            'menuName': '设置',
            'url': '/logistic/article/setting',
          }
        ]
      },
      {
        'menuName': '资产管理',
        'url': '/logistic/assets',
        'subMenus': [
          {
            'menuName': '仓库信息管理',
            'url': '/logistic/assets/warehouse',
          },
          {
            'menuName': '资产类型管理',
            'url': '/logistic/assets/typeAsset',
          },
          {
            'menuName': '资产信息管理',
            'url': '/logistic/assets/asset',
          },
          {
            'menuName': '库存管理',
            'url': '/logistic/assets/inventory',
          },
          {
            'menuName': '出入库记录查询',
            'url': '/logistic/assets/forRecordQuery',
          },
          {
            'menuName': '盘点记录查询',
            'url': '/logistic/assets/recordsQuery',
          },
          {
            'menuName': '物品领用记录统计',
            'url': '/logistic/assets/statisticalExport',
          },
          {
            'menuName': '发票管理',
            'url': '/logistic/assets/invoice',
          }
        ]
      }
    ]
  },
  {
    'menuName': '家校互动',
    'url': '/interaction',
    'subMenus': [
      {
        'menuName': '成长档案',
        'url': '/interaction/grow',
        'subMenus': [
          {
            'menuName': '全部档案',
            'url': '/interaction/grow/documents',
          },
          {
            'menuName': '模版编辑',
            'url': '/interaction/grow/modules',
          },
          {
            'menuName': '设置',
            'url': '/interaction/grow/set',
          }
        ]
      },
      {
        'menuName': '活动打卡',
        'url': '/interaction/activitySign',
        'subMenus': [
          {
            'menuName': '我创建的',
            'url': '/interaction/activitySign/list',
          },
          {
            'menuName': '新建活动',
            'url': '/interaction/activitySign/list/create',
          },
          {
            'menuName': '编辑活动',
            'url': '/interaction/activitySign/list/edit',
          },
          {
            'menuName': '活动详情',
            'url': '/interaction/activitySign/list/detail',
          },
          {
            'menuName': '编辑活动',
            'url': '/interaction/activitySign/list/detail/create',
          },
          {
            'menuName': '数据管理',
            'url': '/interaction/activitySign/dataManage',
          },
          {
            'menuName': '统计报表',
            'url': '/interaction/activitySign/statistics',
          }
        ]
      }
    ]
  },
  {
    'menuName': '穗康晨午检',
    'url': '/suikangCheck',
    'subMenus': [
      {
        'url': '/suikangCheck/report/list',
        'menuName': '统计报表'
      },
      {
        'url': '/suikangCheck/list',
        'menuName': '统计报表'
      }
    ]
  },
  {
    'menuName': '教育局发布',
    'url': '/eduPush',
    'subMenus': [
      {
        'url': '/eduPush/list',
        'menuName': '消息列表'
      },
      {
        'url': '/eduPush/list/create',
        'menuName': '新建消息'
      },
      {
        'url': '/eduPush/list/analyze',
        'menuName': '推送分析'
      }
    ]
  },
  {
    'menuName': '寝室管理',
    'url': '/dorm',
    'subMenus': [
      {
        'url': '/dorm/dormBuilding',
        'menuName': '宿舍楼管理'
      },
      {
        'url': '/dorm/room',
        'menuName': '寝室房间管理'
      },
      {
        'url': '/dorm/registration',
        'menuName': '入住管理'
      },
      {
        'url': '/dorm/ruleManage',
        'menuName': '就寝规则管理'
      },
      {
        'url': '/dorm/ruleManage/nameAndObject',
        'menuName': '新建就寝规则'
      },
      {
        'url': '/dorm/ruleManage/dateAndTime',
        'menuName': '新建就寝规则'
      },
      {
        'url': '/dorm/ruleManage/pushSetting',
        'menuName': '新建就寝规则'
      },
      {
        'url': '/dorm/group',
        'menuName': '寝室管理组'
      },
      {
        'url': '/dorm/group/create',
        'menuName': '新建'
      },
      {
        'url': '/dorm/group/edit',
        'menuName': '编辑'
      }
    ]
  },
  {
    'menuName': '学生考勤',
    'url': '/studentAttendance',
    'subMenus': [
      {
        'url': '/studentAttendance/record',
        'menuName': '考勤记录查询'
      },
      {
        'url': '/studentAttendance/rulesManage',
        'menuName': '规则管理'
      },
      {
        'url': '/studentAttendance/rulesManage/rulesSetting',
        'menuName': '规则设置名称与对象'
      },
      {
        'url': '/studentAttendance/rulesManage/dateAndTime',
        'menuName': '规则设置日期与时间'
      },
      {
        'url': '/studentAttendance/rulesManage/pushSetting',
        'menuName': '规则推送设置'
      },
      {
        'url': '/studentAttendance/pushReportManage',
        'menuName': '安全报告推送管理'
      },
      {
        'url': '/studentAttendance/pushReportManage/pushRuleSetting',
        'menuName': '推送规则'
      }
    ]
  },
  {
    'menuName': '权限系统',
    'url': '/authority',
    'subMenus': [
      {
        'menuName': 'PC菜单管理',
        'url': '/authority/menu',
        'subMenus': [
          {
            'url': '/authority/menu/default',
            'menuName': '默认菜单管理'
          },
          {
            'url': '/authority/menu/school',
            'menuName': '学校列表'
          },
          {
            'url': '/authority/menu/defaultRole',
            'menuName': '默认角色管理'
          }
        ]
      },
      {
        'menuName': '手机菜单管理',
        'url': '/authority/workbenchMenu',
        'subMenus': [
          {
            'url': '/authority/workbenchMenu/school',
            'menuName': '手机学校管理'
          },
          {
            'url': '/authority/workbenchMenu/default',
            'menuName': '手机默认菜单'
          },
          {
            'url': '/authority/workbenchMenu/defaultRole',
            'menuName': '手机默认角色'
          },
          {
            'url': '/authority/workbenchMenu/appManagement',
            'menuName': '应用管理'
          }
        ]
      },
      {
        'menuName': '系统设置',
        'url': '/authority/settings',
        'subMenus': [
          {
            'url': '/authority/settings/message',
            'menuName': '消息开关'
          },
          {
            'url': '/authority/settings/admin',
            'menuName': '管理员设置'
          },
          {
            'url': '/authority/settings/basic',
            'menuName': '基础信息'
          },
          {
            'url': '/authority/settings/operationLog',
            'menuName': '操作日志'
          }
        ]
      }
    ]
  },
  {
    'menuName': '电子班牌',
    'url': '/classBrand',
    'subMenus': [
      {
        'url': '/classBrand/classStyle',
        'menuName': '班级风采设置'
      },
      {
        'url': '/classBrand/greet',
        'menuName': '欢迎模式设置'
      },
      {
        'url': '/classBrand/templateSelection',
        'menuName': '常用模式设置'
      },
      {
        'url': '/classBrand/operateList',
        'menuName': '开关机设置'
      },
      {
        'url': '/classBrand/deviceList',
        'menuName': '班牌管理'
      },
      {
        'url': '/classBrand/appList',
        'menuName': '应用管理'
      },
      {
        'url': '/classBrand/modeList',
        'menuName': '模式管理'
      },
      {
        'url': '/classBrand/schoolList',
        'menuName': '学校管理'
      },
      {
        'url': '/classBrand/configDetail',
        'menuName': '班牌设置'
      }
    ]
  },
  {
    'menuName': '课表',
    'url': '/course',
    'subMenus': [
      {
        'url': '/course/config',
        'menuName': '课表配置'
      },
      {
        'url': '/course/config/lesson',
        'menuName': '课节设置'
      },
      {
        'url': '/course/config/table',
        'menuName': '排课详情'
      },
      {
        'url': '/course/config/table/import',
        'menuName': '导入总课表'
      },
      {
        'url': '/course/config/teach',
        'menuName': '任课详情'
      },
      {
        'url': '/course/config/teach/import',
        'menuName': '导入任课表'
      },
      {
        'url': '/course/manage',
        'menuName': '课表管理'
      }
    ]
  },
  {
    'menuName': '区县管理',
    'url': '/eduManage',
    'subMenus': [
      {
        'menuName': '学校列表',
        'url': '/eduManage/school',
      },
      {
        'menuName': '消息列表',
        'url': '/eduManage/msg',
      },
      {
        'menuName': '调查统计',
        'url': '/eduManage/survey',
        'subMenus': [
          {
            'menuName': '调查列表',
            'url': '/eduManage/survey/list',
          },
          {
            'menuName': '模版中心',
            'url': '/eduManage/survey/template',
          }
        ]
      }
    ]
  },
  {
    'menuName': '卡片配置',
    'url': '/card',
    'subMenus': [
      {
        'url': '/card/set',
        'menuName': '配卡'
      },
      {
        'url': '/card/upload',
        'menuName': '全校配卡'
      }
    ]
  },
  {
    'menuName': '满意度调查',
    'url': '/satisfactionSurvey',
    'subMenus': [
      {
        'url': '/satisfactionSurvey/indicator',
        'menuName': '指标设定'
      },
      {
        'url': '/satisfactionSurvey/indicator/indexItems',
        'menuName': '编辑指标项'
      },
      {
        'url': '/satisfactionSurvey/log',
        'menuName': '日志查询'
      },
      {
        'url': '/satisfactionSurvey/outbox',
        'menuName': '发件箱'
      },
      {
        'url': '/satisfactionSurvey/outbox/areaStatistic',
        'menuName': '区域统计'
      },
      {
        'url': '/satisfactionSurvey/dataManage/curDep',
        'menuName': '统计反馈'
      },
      {
        'url': '/satisfactionSurvey/outbox/detail',
        'menuName': '详情'
      },
      {
        'url': '/satisfactionSurvey/outbox/result',
        'menuName': '统计结果'
      },
      {
        'url': '/satisfactionSurvey/outbox/create',
        'menuName': '填写内容'
      },
      {
        'url': '/satisfactionSurvey/outbox/readDetail',
        'menuName': '填报详情'
      }
    ]
  },
  {
    'menuName': '预览页面',
    'url': '/v2/preview/file/:fileId',
  },
  {
    'menuName': '阅读统计',
    'url': '/readStatistics',
    'subMenus': [
      {
        'url': '/readStatistics/readDetail',
        'menuName': '阅读详情'
      }
    ]
  },
  {
    'menuName': '考勤请假',
    'url': '/attendForLeave',
    'subMenus': [
      {
        'url': '/attendForLeave/rule',
        'menuName': '考勤规则'
      },
      {
        'url': '/attendForLeave/workCheck',
        'menuName': '考勤请假查询'
      }
    ]
  },
];