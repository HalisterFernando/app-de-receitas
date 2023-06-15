import React, { useContext } from 'react';

import { useParams } from 'react-router-dom';
import useFavorite from '../../hooks/useFavorite';
import { AppContext } from '../../context/Provider';
import FavoriteBtn from '../../components/FavoriteBtn';
import useInProgress from '../../hooks/useInProgress';
import Alert from '../../components/Alert';

import useLoading from '../../hooks/useLoading';
import Loading from '../../components/Loading';
import useRecipeDetails from '../../hooks/useRecipeDetails';
import useFinishedRecipes from '../../hooks/useFinishedRecipes';
import ShareBtn from '../../components/ShareBtn';
import useShare from '../../hooks/useShare';

const TYPE = 'drinks';

export default function DrinkInProgress() {
  const { id } = useParams();
  useRecipeDetails(id, TYPE);
  const { loading } = useLoading();
  const { currentRecipe: { recipe, ingredients },
    inProgressRecipes: { cocktails } } = useContext(AppContext);
  const { addFavoriteRecipe, removeFavoriteRecipe,
    recipeToFavorite, isFavorite } = useFavorite(id);
  const { handleUsedIngredients } = useInProgress(id, TYPE);
  const { finishRecipe, isReadyToFinish } = useFinishedRecipes(id, TYPE);
  const { show, handleShare } = useShare();
  const cocktailsForId = cocktails[id] || [];

  return (
    <div className="flex flex-col h-screen bg-orange-200">
      {loading ? <Loading /> : (
        <main className="overflow-y-scroll animate-slide-up">
          <div>
            <img
              className="food-image"
              data-testid="recipe-photo"
              src={ recipe.strDrinkThumb }
              alt="Foto da Receita"
            />
          </div>
          <div className="p-2 m-2 bg-white rounded-xl">
            <div
              className="
                flex
                items-center
                justify-between
                "
            >
              <h1
                className="text-orange-600 text-xl font-semibold"
                data-testid="recipe-title"
              >
                {recipe.strDrink}
              </h1>
              <div className="flex gap-3">
                <ShareBtn handleShare={ handleShare } />
                <FavoriteBtn
                  recipe={ recipeToFavorite(recipe, TYPE) }
                  add={ addFavoriteRecipe }
                  remove={ removeFavoriteRecipe }
                  isFavorite={ isFavorite }
                />
              </div>
            </div>
            {show && <Alert show={ show } />}
            <h4
              className="text-sm text-slate-900 my-2"
              data-testid="recipe-category"
            >
              { `Category - ${recipe.strCategory}` }
            </h4>
            <h3 className="font-semibold my-2 text-orange-600">Ingredients</h3>
            <div className="flex flex-col gap-1 p-2">
              {ingredients.map((ingredient, idx) => (
                <label
                  data-testid={ `${idx}-ingredient-step` }
                  htmlFor={ ingredient }
                  key={ ingredient }
                  className={ `${cocktailsForId.includes(ingredient)
                    ? 'line-through' : ''}` }
                >
                  <input
                    type="checkbox"
                    id={ id }
                    name={ ingredient }
                    value={ ingredient }
                    checked={ cocktailsForId.includes(ingredient) }
                    onChange={ (ev) => handleUsedIngredients(ev) }
                    className="accent-orange-400"
                  />
                  {` ${ingredient}`}
                </label>
              ))}
            </div>

            <h3 className="font-semibold my-2 text-orange-600">Instructions</h3>
            <p
              data-testid="instructions"
            >
              { recipe.strInstructions }
            </p>

          </div>

          <button
            type="button"
            data-testid="finish-recipe-btn"
            className={
              `${isReadyToFinish() ? 'bg-orange-400' : 'bg-white'} 
              p-1 
              mx-auto 
              block 
              py-1 
              px-2 
              my-4
              bg-orange-400 
              rounded-full
              shadow-md
              shadow-black 
              font-semibold
            `
            }
            disabled={ !isReadyToFinish() }
            onClick={ () => finishRecipe(recipe) }
          >
            Finish Recipe
          </button>
        </main>
      )}
    </div>

  );
}
