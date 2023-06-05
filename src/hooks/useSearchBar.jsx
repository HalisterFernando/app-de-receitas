import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Provider';
import { getByFirstLetter, getByIngredient,
  getByName } from '../services/searchBarServices';

export default function useSearchBar(type) {
  const [filter, setFilter] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const { setMeals, setDrinks, toggleSearchBar } = useContext(AppContext);
  const customAlert = window.alert;
  const navigate = useNavigate();

  const isTypeFoods = type === 'foods';

  const routesToPush = {
    foods: (result) => navigate(`/${type}/${result[0].idMeal}`),
    drinks: (result) => navigate(`/${type}/${result[0].idDrink}`),
  };

  const searchResult = (result) => {
    if (result.length === 1) return routesToPush[type](result);

    if (isTypeFoods) {
      setMeals(result);
    } else {
      setDrinks(result);
    }
  };

  const searchFilters = {
    ingrediente: async () => getByIngredient(searchValue, type),
    nome: async () => getByName(searchValue, type),
    'primeira letra': async () => {
      if (searchValue.length > 1) {
        return customAlert('Your search must have only 1 (one) character');
      }
      return getByFirstLetter(searchValue, type);
    },
  };

  const handleSearchBar = async () => {
    const response = await searchFilters[filter]();

    if (!response) {
      return customAlert(
        'Sorry, we haven\'t found any recipes for these filters.',
      );
    }
    return searchResult(response);
  };
  return { setFilter, setSearchValue, toggleSearchBar, handleSearchBar };
}
