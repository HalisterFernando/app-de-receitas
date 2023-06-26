import { useContext, useState } from 'react';
import { AppContext } from '../context/Provider';
import useFinishedRecipes from './useFinishedRecipes';

export default function useDoneRecipes() {
  const { finishedRecipes } = useContext(AppContext);
  const [filter, setFilter] = useState('All');
  useFinishedRecipes();

  const filtersForFinishedRecipes = {
    Food: (arr) => arr.filter(({ type }) => type === 'meal'),
    Drinks: (arr) => arr.filter(({ type }) => type === 'cocktail'),
    All: (arr) => arr,
  };

  const recipesToRender = () => {
    const recipes = [...finishedRecipes];
    const filteredValues = filtersForFinishedRecipes[filter](recipes);
    return filteredValues;
  };

  return { recipesToRender, setFilter };
}
