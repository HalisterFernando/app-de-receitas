import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Provider';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

const titles = {
  '/main': 'Foods',
  '/drinks': 'Drinks',
  '/ingredients': 'Foods',
  '/foods': 'Foods',
  '/explore': 'Explore',
  '/explore/foods': 'Explore Foods',
  '/explore/drinks': 'Explore Drinks',
  '/explore/foods/ingredients': 'Explore Ingredients',
  '/explore/drinks/ingredients': 'Explore Ingredients',
  '/explore/foods/nationalities': 'Explore Nationalities',
  '/favorites': 'Explore Foods',
  '/favorite-recipes': 'Favorite Recipes',
  '/done-recipes': 'Done Recipes',
  '/profile': 'Profile',
  '/nationality': 'Explore Nationalities',
};

export default function Header() {
  const { toggleSearchBar, setToggleSearchBar } = useContext(AppContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const renderSearchIcon = (path) => {
    const paths = ['/foods', '/nationality', '/drinks'];

    return (
      paths.includes(path) ? (
        <button
          onClick={ () => setToggleSearchBar(!toggleSearchBar) }
          type="button"
        >
          <img data-testid="search-top-btn" alt="search icon" src={ SearchIcon } />
        </button>
      ) : (
        <div className="h-[30px] w-[30px]" />
      )
    );
  };
  return (
    <header className="flex justify-between items-center p-2">
      <button type="button" onClick={ () => navigate('/profile') }>
        <img data-testid="profile-top-btn" alt="profile icon" src={ ProfileIcon } />
      </button>
      <h1 data-testid="page-title">{ titles[pathname] }</h1>
      {renderSearchIcon(pathname)}
    </header>
  );
}
