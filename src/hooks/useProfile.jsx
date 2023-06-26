import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Provider';
import { getItem, removeItem } from '../services/localStorageServices';

export default function useProfile() {
  const navigate = useNavigate();
  const { setUserEmail } = useContext(AppContext);

  useEffect(() => {
    const user = getItem('user');
    if (user) {
      setUserEmail(user);
    }
  }, []);

  const handleLogout = () => {
    const localStorageKeys = ['user', 'allIngredients', 'favoriteRecipes', 'mealsToken',
      'cocktailsToken', 'inProgressRecipes', 'doneRecipes'];

    localStorageKeys.forEach((key) => removeItem(key));
    navigate('/');
    window.location.reload();
  };
  return { handleLogout };
}
