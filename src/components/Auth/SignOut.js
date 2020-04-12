import React from 'react';
import { ApolloConsumer } from '@apollo/react-common';

import { home } from '../../redirects';
import { useRedirect } from '../../hooks';

const handleSignOut = (client) => (evt) => {
  evt.preventDefault();

  localStorage.setItem('token', '');
  client.resetStore();
};

const SignOut = () => {
  useRedirect(home([]));

  return (
    <ApolloConsumer>
      {
        client => {
          return <button onClick={handleSignOut(client)}>Sign Out</button>
        }
      }
    </ApolloConsumer>
  );
};

export default SignOut;
