import React, { createContext } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_CURRENT_USER } from '../../queries';

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const { loading, error, data, refetch } = useQuery(GET_CURRENT_USER);

  return (
    <SessionContext.Provider value={{ refetch, error, loading, ...data }}>
      { children }
    </SessionContext.Provider>
  )
};

export default SessionContextProvider;
