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
    p-2
    bg-gradient-to-b
    from-orange-400
    to-orange-200
    "
    >
      <button
        className="
        rounded-full
        h-10
        w-10
        bg-white
        shadow-sm
        shadow-black
      "
        type="button"
        onClick={ () => navigate('/profile') }
      >
        <BsPersonCircle
          data-testid="profile-top-btn"
          className="text-3xl block mx-auto"
        />
      </button>
      <div
        className="
      rounded-full
      bg-white
      w-48
      h-10
      shadow-sm
      shadow-black
      p-4
      flex
      items-center
      justify-center
      "
      >
        <span
          className="font-mono font-semibold text-2xl line"
          data-testid="page-title"
        >
          { headerTitles[pathname] }
        </span>
      </div>

      {checkPath() ? (
        <button
          className="
      rounded-full
      h-10
      w-10
      bg-white
      shadow-sm
      shadow-black
      "
          onClick={ () => setToggleSearchBar(!toggleSearchBar) }
          type="button"
        >
          <BsSearch
            data-testid="search-top-btn"
            className="text-3xl block mx-auto"
          />
        </button>
      ) : (
        <div className="h-[30px] w-[30px]" />
      )}
    </header>
  );
}
