import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { fetchMealNationalities } from '../services/foodServices';

export default function MealNationaties({ handleNationality }) {
  const [nationalities, setNationalities] = useState([]);

  useEffect(() => {
    const getNationalities = async () => {
      const { meals } = await fetchMealNationalities();

      setNationalities(meals.map(({ strArea }) => strArea));
    };
    getNationalities();
  }, []);

  return (
    <select
      className="p-1 bg-orange-200 text-lg mx-2 h-10 rounded"
      name="nationality"
      data-testid="explore-by-nationality-dropdown"
      onChange={ (ev) => handleNationality(ev) }
    >
      <option value="All">All</option>
      {nationalities.map((nationality) => (
        <option
          data-testid={ `explore-by-${nationality}-dropdown` }
          key={ nationality }
          value={ nationality }
        >
          {nationality}
        </option>))}
    </select>
  );
}

MealNationaties.propTypes = {
  handleNationality: propTypes.func.isRequired,
};
