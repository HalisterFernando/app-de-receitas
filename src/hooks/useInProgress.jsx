import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/Provider';
import { getItem, setItem } from '../services/localStorageServices';

export default function useInProgress(id, type) {
  const { inProgressRecipes, setInProgressRecipes } = useContext(AppContext);
  const [usedIngredients, setUsedIngredients] = useState([]);

  useEffect(() => {
    const inProgress = getItem('inProgressRecipes');
    setInProgressRecipes(inProgress || { cocktails: {}, meals: {} });
  }, []);

  useEffect(() => {
    if (type === 'foods' && Object.keys(inProgressRecipes).length > 0) {
      setUsedIngredients(inProgressRecipes.meals[id]);
    }

    if (type === 'drinks' && Object.keys(inProgressRecipes).length > 0) {
      setUsedIngredients(inProgressRecipes.cocktails[id]);
    }
  }, []);

  useEffect(() => {
    if (type === 'foods') {
      setInProgressRecipes({ ...inProgressRecipes, meals: { [id]: usedIngredients } });
    } else {
      setInProgressRecipes({ ...inProgressRecipes,
        cocktails: { [id]: usedIngredients },
      });
    }
  }, [usedIngredients]);

  const setInLocalStorage = (updatedIngredients) => {
    if (type === 'foods') {
      setItem('inProgressRecipes', { ...inProgressRecipes,
        meals: { [id]: updatedIngredients },
      });
    } else {
      setItem('inProgressRecipes', { ...inProgressRecipes,
        cocktails: { [id]: updatedIngredients },
      });
    }
  };

  const addIngredient = (value) => {
    const updatedIngredients = [...usedIngredients, value];
    setUsedIngredients(updatedIngredients);
    setInLocalStorage(updatedIngredients);
  };

  const removeIngredient = (value) => {
    const updatedIngredients = [...usedIngredients]
      .filter((ingredient) => ingredient !== value);
    setUsedIngredients(updatedIngredients);
    setInLocalStorage(updatedIngredients);
  };

  return { addIngredient, removeIngredient, usedIngredients };
}
