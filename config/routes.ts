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
      // { name: '订阅管理', icon: 'table', path: '/admin/subscriptionPage', component: './UserManager' },
    ],
  },
  // { name: '订阅管理', icon: 'table', path: '/subscriptionPage', component: './UserManager' },
  { path: '*', layout: false, component: './404' },
];
