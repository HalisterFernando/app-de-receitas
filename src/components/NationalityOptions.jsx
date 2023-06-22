import React, { useContext } from 'react';
import useNationalities from '../hooks/useNationalities';
import { AppContext } from '../context/Provider';

export default function NationalityOptions() {
  const { handleNationality } = useNationalities();
  const { nationalities } = useContext(AppContext);

  return (
    <select
      className="p-1 text-lg m-3 h-10 rounded"
      name="nationality"
      data-testid="explore-by-nationality-dropdown"
      onChange={ (ev) => handleNationality(ev) }
    >
      <option value="All">All</option>
      {nationalities.map(({ strArea }, index) => (
        <option
          data-testid={ `explore-by-${strArea}-dropdown` }
          key={ index }
          value={ strArea }
        >
          {strArea}
        </option>))}
    </select>
  );
}
