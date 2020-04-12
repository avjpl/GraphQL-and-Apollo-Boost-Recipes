import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { SessionContext } from '../Contexts/Session';
import SignOut from '../Auth/SignOut';

const UnAuth = () => (
  <ul>
    <li>
      <NavLink to='/'>Home</NavLink>
    </li>

    <li>
      <NavLink to='/search'>Seacrh</NavLink>
    </li>

    <li>
      <NavLink to='/signin'>Sign In</NavLink>
    </li>

    <li>
      <NavLink to='/signup'>Sign Up</NavLink>
    </li>
  </ul>
);

const Auth = ({ username }) => (
  <>
    <ul>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>

      <li>
        <NavLink to='/search'>Seacrh</NavLink>
      </li>

      <li>
        <NavLink to='/recipe/add'>Add Recipe</NavLink>
      </li>

      <li>
        <NavLink to='/profile'>Profile</NavLink>
      </li>
      <li>
        <SignOut />
      </li>
    </ul>
    <h4>{`Welcome back ${username}`}</h4>
  </>
);

const NavBar = () => {
  const { getCurrentUser: session } = useContext(SessionContext);

  return (
    <nav>
      {
        session ? <Auth {...session} /> : <UnAuth />
      }
    </nav>
  );
};

export default NavBar;
