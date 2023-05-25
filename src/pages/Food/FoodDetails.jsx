import React, { useContext, useEffect, useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { AppContext } from '../../context/Provider';
import useRecipeDetails from '../../hooks/useRecipeDetails';
import useLoading from '../../hooks/useLoading';
import FavoriteBtn from '../../components/FavoriteBtn';
import useFavorite from '../../hooks/useFavorite';
import Recomendations from '../../components/Recomendations';
import useTimeOut from '../../hooks/useTimeout';
import Alert from '../../components/Alert';
import ShareBtn from '../../components/ShareBtn';
import useFinishedRecipes from '../../hooks/useFinishedRecipes';

const TYPE = 'foods';

export default function FoodDetails() {
  const { id } = useParams();
  useRecipeDetails(id, TYPE);
  useFinishedRecipes();
  const { loading } = useLoading();
  const { show, timeOut } = useTimeOut();
  const { currentRecipe: { recipe, ingredients },
    favoriteRecipes, finishedRecipes } = useContext(AppContext);
  const { addFavoriteRecipe, removeFavoriteRecipe, recipeToFavorite } = useFavorite();
  const [isFavorite, setIsFavorite] = useState('');

  useEffect(() => {
    setIsFavorite(favoriteRecipes.some((favorite) => favorite.id === id));
  }, [favoriteRecipes]);

  const handleShare = () => {
    clipboardCopy(`http://localhost:3000/foods/${id}`);
    timeOut();
  };

  const isRecipeFinished = () => finishedRecipes
    .some((finishedRecipe) => finishedRecipe.id === id);

  return (
    <div>
      {
        loading ? <Loading /> : (
          <>
            <img
              className="image-recipe"
              src={ recipe.strMealThumb }
              alt={ recipe.strMeal }
              data-testid="recipe-photo"
            />
            <div className="flex items-center justify-between p-2">

              <h1 data-testid="recipe-title">{ recipe.strMeal }</h1>
              <div className="flex gap-3">
                <ShareBtn handleShare={ handleShare } />
                <FavoriteBtn
                  recipe={ recipeToFavorite(recipe, TYPE) }
                  add={ addFavoriteRecipe }
                  remove={ removeFavoriteRecipe }
                  isFavorite={ isFavorite }
                  type={ TYPE }
                />
              </div>
            </div>
            {show && <Alert show={ show } />}
            <ul className="bg-orange-400 p-2 m-2 rounded">
              <h3 data-testid="recipe-category">{ recipe.strCategory }</h3>
              {ingredients.map((ingredient, index) => (
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                  key={ ingredient }
                >
                  { ingredient }
                </li>
              ))}
            </ul>
            <p
              data-testid="instructions"
              className="bg-orange-400 p-2 m-2 rounded"
            >
              { recipe.strInstructions }
            </p>
            <iframe
              className="mx-auto block my-4"
              title="Videeo"
              data-testid="video"
              allow="fullscreen"
              src={ recipe.strYoutube }
            />
            <div className="overflow-x-scroll mt-5">
              <Recomendations type={ TYPE } />
            </div>
            <Link
              to={ `/foods/${id}/in-progress` }
            >
              <button
                className={
                  `${isRecipeFinished() ? 'hidden' : 'block'} 
                  mx-auto 
                  bg-orange-400 
                  p-1 
                  rounded 
                  my-4`
                }
                type="button"
                data-testid="start-recipe-btn"
              >
                Start Recipe
              </button>
            </Link>
          </>
        )
      }
    </div>
  );
}
