import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AppContext } from '../context/Provider';
import { getItem } from '../services/localStorageServices';

export default function Profile() {
  const navigate = useNavigate();
  const { userEmail, setUserEmail } = useContext(AppContext);

  useEffect(() => {
    const user = getItem('user');
    if (user) {
      setUserEmail(user);
    }
  }, []);

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
        <h2>{userEmail}</h2>
        <button
          className="w-72 h-14 text-center shadow-md shadow-black bg-orange-400 rounded"
          data-testid="filter-by-all-btn"
          name="All"
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
          data-testid="filter-by-drink-btn"
          name="Drinks"
        // onClick={ (ev) => filter(ev.target.name) }
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
}
