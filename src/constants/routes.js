import Admin from '../views/Admin';
import Login from '../views/Login';
import User from '../views/User';

const notLoggedInRoutes = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
];

const userRoutes = [
  {
    path: '/user',
    exact: true,
    component: User,
  },
];

const adminRoutes = [
  {
    path: '/user',
    exact: true,
    component: Admin,
  },
];

export { notLoggedInRoutes, userRoutes, adminRoutes };
