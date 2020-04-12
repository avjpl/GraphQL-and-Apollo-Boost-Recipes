import Home from '../components/Home';
import Search from '../components/Recipe/Search';
import AddRecipe from '../components/Recipe/AddRecipe';
import Profile from '../components/Profile';
import SignUp from '../components/Auth/SignUp';
import SignIn from '../components/Auth/SignIn';
import SignOut from '../components/Auth/SignOut';

export const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: Search,
    path: '/search',
    exact: true,
  },
  {
    component: AddRecipe,
    path: '/recipe/add',
    exact: true,
  },
  {
    component: Profile,
    path: '/profile',
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
  {
    component: SignOut,
    path: '/signout',
    exact: true,
  },
];
