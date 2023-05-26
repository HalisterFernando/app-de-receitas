import React, { useState, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

function Provider({ children }) {
  const [userEmail, setUserEmail] = useState('');
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({ recipe: '', ingredients: '' });
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [inProgressRecipes, setInProgressRecipes] = useState(
    { cocktails: {}, meals: {} },
  );
  const [finishedRecipes, setFinishedRecipes] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);

  const context = useMemo(() => ({
    userEmail,
    setUserEmail,
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
    inProgressRecipes,
    setInProgressRecipes,
    finishedRecipes,
    setFinishedRecipes,
    allIngredients,
    setAllIngredients,
  }), [userEmail, meals, drinks, toggleSearchBar, currentRecipe,
    categories, favoriteRecipes, inProgressRecipes, finishedRecipes, allIngredients]);

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
