import React, { useState, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({ recipe: '', ingredients: '' });
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const context = useMemo(() => ({
    meals,
    setMeals,
    drinks,
    setDrinks,
    toggleSearchBar,
    setToggleSearchBar,
    currentRecipe,
    setCurrentRecipe,
    categories,
    setCategories,
    favoriteRecipes,
    setFavoriteRecipes,
  }), [meals, drinks, toggleSearchBar, currentRecipe, categories, favoriteRecipes]);

  return (
    <div>
      <AppContext.Provider value={ context }>
        {children}
      </AppContext.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
