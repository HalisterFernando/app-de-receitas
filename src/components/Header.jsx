import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsPersonCircle, BsSearch } from 'react-icons/bs';
import { AppContext } from '../context/Provider';
import useHeader from '../hooks/useHeader';

export default function Header() {
  const { toggleSearchBar, setToggleSearchBar } = useContext(AppContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { checkPath, headerTitles } = useHeader(pathname);

  return (
    <header
      className="
    flex
    justify-between
    items-center
    py-1
    px-2
    bg-gradient-to-b
    from-orange-400
    to-orange-200
    "
    >
      <button
        className="
        rounded-full
        h-9
        w-9
        bg-white
        shadow-sm
        shadow-black
      "
        type="button"
        onClick={ () => navigate('/profile') }
      >
        <BsPersonCircle
          data-testid="profile-top-btn"
          className="text-2xl block mx-auto"
        />
      </button>
      <div
        className="
      rounded-full
      bg-white
      w-52
      h-8
      shadow-sm
      shadow-black
      "
      >
        <h1
          className="font-semibold text-xl text-center"
          data-testid="page-title"
        >
          { headerTitles[pathname] }
        </h1>
      </div>

      {checkPath() ? (
        <button
          className="
      rounded-full
      h-9
      w-9
      bg-white
      shadow-sm
      shadow-black
      "
          onClick={ () => setToggleSearchBar(!toggleSearchBar) }
          type="button"
        >
          <BsSearch
            data-testid="search-top-btn"
            className="text-2xl block mx-auto"
          />
        </button>
      ) : (
        <div className="h-[30px] w-[30px]" />
      )}
    </header>
  );
}
