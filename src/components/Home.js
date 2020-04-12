import React, { useContext, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import { GET_ALL_RECIPES } from '../queries';
import { SessionContext } from './Contexts/Session';

import styles from './Home.css';

const Home = () => {
  const history = useHistory();
  const { refetch } = useContext(SessionContext);
  const { loading, error, data } = useQuery(GET_ALL_RECIPES);

  useEffect(() => {
    async function refetchQuery() {
      const data = await refetch();
      return data;
    }

    refetchQuery()
      .then(({ data: { getCurrentUser }}) => {
        !getCurrentUser && history.push('/signin');
      });
  }, []);


  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {
        data.getAllRecipes.map((recipe, idx) => {
          return (
            <section key={idx}>
              <h2>{recipe.name}</h2>
            </section>
          )
        })
      }
    </>
  );
};

export default Home;
