import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_ALL_RECIPES } from '../queries';
import styles from './Home.css';

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_RECIPES);

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
