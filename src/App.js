// import '@babel/polyfill';
import React, { Fragment } from 'react';

import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { onError } from "apollo-link-error";

import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { routes } from './routes/syncRoutes';
import SessionContextProvider from './components/Contexts/Session';
import Navbar from './components/NavBar';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
      // authorization: token ? `Bearer ${token}` : "",
    }
  };
});

const link = ApolloLink.from([
  errorLink,
  authLink,
  httpLink
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <SessionContextProvider>
      <Router>
        <Fragment>
          <Navbar />

          {renderRoutes(routes)}
        </Fragment>
      </Router>
    </SessionContextProvider>
  </ApolloProvider>
);

export default App;
