import Home from '../components/Home';
import SignUp from '../components/Auth/SignUp';
import SignIn from '../components/Auth/SignIn';

export const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: SignUp,
    path: '/signup',
    exact: true,
  },
  {
    component: SignIn,
    path: '/signin',
    exact: true,
  },
];
