import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_CURRENT_USER } from '../../queries';

const Session = ({ children }) => {
  useEffect(() => {
    const { loading, error, data } = useQuery(GET_CURRENT_USER);
  }, []);

  return children();
};

export default Session;
