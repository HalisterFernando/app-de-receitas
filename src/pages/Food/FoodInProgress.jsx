import React, { useContext, useEffect, useState } from 'react';
// import Alert from '../../components/Alert';
import clipboardCopy from 'clipboard-copy';
import { useParams } from 'react-router-dom';
import useFavorite from '../../hooks/useFavorite';
// import useIngredients from '../../context/hooks/useIngredients';
// import useLocalStorage from '../../context/hooks/useLocalStorage';
// import useTimeOut from '../../context/hooks/useTimeOut';
import ShareIcon from '../../images/shareIcon.svg';
import { AppContext } from '../../context/Provider';
import FavoriteBtn from '../../components/FavoriteBtn';
import useInProgress from '../../hooks/useInProgress';
import Alert from '../../components/Alert';
import useTimeOut from '../../hooks/useTimeout';

const TYPE = 'foods';

export default function FoodInProgress() {
  const { id } = useParams();
  const { currentRecipe: { recipe, ingredients },
    favoriteRecipes } = useContext(AppContext);
  const { addFavoriteRecipe, removeFavoriteRecipe } = useFavorite(TYPE);
  const { show, timeOut } = useTimeOut();
  const [isFavorite, setIsFavorite] = useState('');
  const { addIngredient, removeIngredient, usedIngredients } = useInProgress(id, TYPE);

  const handleUsedIngredients = ({ target: { checked, value } }) => {
    if (checked) {
      addIngredient(value);
    } else {
      removeIngredient(value);
    }
  };

  const handleShare = () => {
    clipboardCopy(`http://localhost:3000/foods/${id}`);
    timeOut();
  };

  useEffect(() => {
    setIsFavorite(favoriteRecipes.some((favorite) => favorite.id === id));
  }, [favoriteRecipes]);

  return (
    <main className="food-progress-container">

      <div>
        <img
          className="food-image"
          data-testid="recipe-photo"
          src={ recipe.strMealThumb }
          alt="Foto da Receita"
        />
      </div>
      <div className="flex items-center justify-between p-2">
        <h4 data-testid="recipe-title">{recipe.strMeal}</h4>
        <div className="flex gap-3">
          <button
            data-testid="share-btn"
            type="button"
            onClick={ () => handleShare() }
          >
            <img src={ ShareIcon } alt="compartilhar" />
          </button>

          <FavoriteBtn
            recipe={ recipe }
            add={ addFavoriteRecipe }
            remove={ removeFavoriteRecipe }
            isFavorite={ isFavorite }
          />
        </div>
      </div>
      <span data-testid="recipe-category" className="p-2">Categoria</span>
      {show && <Alert show={ show } />}
      <div className="p-2">
        <h4>Ingredientes</h4>
        <div className="flex flex-col p-2 bg-orange-400 rounded">
          {ingredients.map((ingredient, idx) => (
            <label
              data-testid={ `${idx}-ingredient-step` }
              htmlFor={ ingredient }
              key={ ingredient }
              className={
                `${usedIngredients.includes(ingredient) ? 'line-through' : ''}`
              }
            >
              <input
                type="checkbox"
                id={ id }
                name={ ingredient }
                value={ ingredient }
                checked={ usedIngredients.includes(ingredient) }
                onChange={ (ev) => handleUsedIngredients(ev) }

              />
              {` ${ingredient}`}
            </label>
          ))}
        </div>
      </div>
      <div className="instructions-container">
        <h4 className="p-2">Instruções</h4>
        <p
          data-testid="instructions"
          className="bg-orange-400 p-2 m-2 rounded"
        >
          {recipe.strInstructions}
        </p>
      </div>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        className="mx-auto block bg-orange-400 p-1 rounded my-4"
      >
        Finish Recipe
      </button>
    </main>
  );
}
