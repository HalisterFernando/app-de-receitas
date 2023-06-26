import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AppContext } from '../context/Provider';

import useProfile from '../hooks/useProfile';

export default function Profile() {
  const { userEmail } = useContext(AppContext);
  const { handleLogout } = useProfile();

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
