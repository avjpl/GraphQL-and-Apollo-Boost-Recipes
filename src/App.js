// import '@babel/polyfill';
import React, { Fragment } from 'react';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';

import { BrowserRouter as Router, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { routes } from './routes/syncRoutes';

const httpLink = createHttpLink({ uri: "http://localhost:4000/graphql" });
const authLink = setContext((_, { headers }) => {
  // console.log({ headers });

  return {
    headers: {
      // 'x-api-key': 'some-key'
    }
  };
});

const client = new ApolloClient({
  link:  authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Fragment>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
            <li>
              <Link to='/signin'>Sign In</Link>
            </li>
          </ul>
        </nav>

        {renderRoutes(routes)}
      </Fragment>
    </Router>

  </ApolloProvider>
);

export default App;
