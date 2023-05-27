import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AppContext } from '../context/Provider';
import { getItem, removeItem } from '../services/localStorageServices';

export default function Profile() {
  const navigate = useNavigate();
  const { userEmail, setUserEmail } = useContext(AppContext);

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

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div
        className="
        flex
        flex-col
        items-center
        justify-evenly
        h-full
        gap-2
        mt-2
        overflow-y-scroll"
      >
        <h2 data-testid="profile-email">{userEmail}</h2>
        <button
          className="w-72 h-14 text-center shadow-md shadow-black bg-orange-400 rounded"
          data-testid="profile-done-btn"
          onClick={ () => navigate('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          className="w-72 h-14 text-center shadow-md shadow-black bg-orange-400 rounded"
          data-testid="filter-by-food-btn"
          name="Food"
          onClick={ () => navigate('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          className="w-72 h-14 text-center shadow-md shadow-black bg-orange-400 rounded"
          data-testid="profile-logout-btn"
          name="Drinks"
          onClick={ () => handleLogout() }
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
}
