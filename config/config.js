// https://umijs.org/config/
import { defineConfig } from 'umi';
import { join } from 'path';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';
import webpackPlugin from './plugin.config';

const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  history: {
    type: 'browser',
  },

  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    // moment: 'moment',
    // lodash: '_',
    antd: 'antd',
  },

  // 引入被 external 库的 scripts
  // 区分 development 和 production，使用不同的产物
  scripts:
    process.env.NODE_ENV === 'development'
      ? [
          // 'https://unpkg.com/browse/moment@2.25.3/moment.js',
          // 'https://cdn.jsdelivr.net/npm/lodash@4.17.19/lodash.js',
          // 'https://cdn.jsdelivr.net/npm/antd@4.5.2/dist/antd.js',
          'https://gw.alipayobjects.com/os/lib/react/16.13.0/umd/react.development.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/16.13.0/umd/react-dom.development.js',
        ]
      : [
          // 'https://unpkg.com/browse/moment@2.25.3/min/moment.min.js',
          // 'https://cdn.jsdelivr.net/npm/lodash@4.17.19/lodash.min.js',
          // 'https://cdn.jsdelivr.net/npm/antd@4.5.2/dist/antd.min.js',
          'https://gw.alipayobjects.com/os/lib/react/17.0.0/umd/react.production.min.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/17.0.0/umd/react-dom.production.min.js',
        ],
  // styles:
  //   process.env.NODE_ENV === 'development'
  //     ? ['https://cdn.jsdelivr.net/npm/antd@4.5.2/dist/antd.css']
  //     : ['https://cdn.jsdelivr.net/npm/antd@4.5.2/dist/antd.min.css'],

  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },

  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  // openAPI: [
  //   {
  //     requestLibPath: "import { request } from 'umi'",
  //     // 或者使用在线的版本
  //     // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
  //     schemaPath: join(__dirname, 'oneapi.json'),
  //     mock: false,
  //   },
  //   {
  //     requestLibPath: "import { request } from 'umi'",
  //     schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
  //     projectName: 'swagger',
  //   },
  // ],
  nodeModulesTransform: {
    type: 'none',
  },
  // mfsu: {},
  webpack5: {},
  exportStatic: {},
  // mountElementId: 'root-master',
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:1114', // html entry
        },
        {
          name: 'app2', // 唯一 id
          entry: '//localhost:1113', // html entry
        },
        {
          name: 'workflow', // 唯一 id
          entry: '//localhost:8012/workFlow', // html entry
        },
      ],
    },
  },
});
