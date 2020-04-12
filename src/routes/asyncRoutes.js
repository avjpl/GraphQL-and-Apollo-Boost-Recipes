import { AsyncComponent } from '../utils';

export const routes = [
  {
    component: AsyncComponent(() => import('../components/Home')),
    path: '/',
    exact: true,
  },
  {
    component: AsyncComponent(() => import('../components/Recipe/Search')),
    path: '/',
    exact: true,
  },
  {
    component: AsyncComponent(() => import('../components/Auth/SignIn')),
    path: '/',
    exact: true,
  },
  {
    component: AsyncComponent(() => import('../components/Auth/SignUp')),
    path: '/',
    exact: true,
  },
];
