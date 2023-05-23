import React, { useState, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

function Provider({ children }) {
  // all drinks and meals
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({ recipe: '', ingredients: '' });

  const context = useMemo(() => ({
    meals,
    setMeals,
    drinks,
    setDrinks,
    toggleSearchBar,
    setToggleSearchBar,
    currentRecipe,
    setCurrentRecipe,
  }), [meals, drinks, toggleSearchBar, currentRecipe]);

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
