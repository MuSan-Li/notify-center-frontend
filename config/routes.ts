export default [
  { path: '/', redirect: '/welcome' },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'setting',
    access: 'canAdmin',
    routes: [
      { name: '用户管理', icon: 'table', path: '/admin/userPage', component: './UserManager' },
      { name: '订阅管理', icon: 'table', path: '/admin/notifyPage', component: './NotifyManager' },
      {
        name: '订阅历史记录',
        icon: 'table',
        path: '/admin/notifyLogPage',
        component: './NotifyLogManager',
      },
      { name: '邮箱管理', icon: 'table', path: '/admin/emailPage', component: './EmailManager' },
    ],
  },
  { name: '订阅管理', icon: 'table', path: '/notifyPage', component: './NotifyManager' },
  { path: '*', layout: false, component: './404' },
];
