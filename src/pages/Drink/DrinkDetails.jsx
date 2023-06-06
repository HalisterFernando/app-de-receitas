import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { AppContext } from '../../context/Provider';
import useRecipeDetails from '../../hooks/useRecipeDetails';
import useLoading from '../../hooks/useLoading';
import FavoriteBtn from '../../components/FavoriteBtn';
import useFavorite from '../../hooks/useFavorite';
import Recomendations from '../../components/Recomendations';

import Alert from '../../components/Alert';
import ShareBtn from '../../components/ShareBtn';
import useFinishedRecipes from '../../hooks/useFinishedRecipes';
import useShare from '../../hooks/useShare';
import Footer from '../../components/Footer';

const TYPE = 'drinks';
const URL = window.location.href;

export default function DrinkDetails() {
  const { id } = useParams();
  const { convertUrlToEmbed } = useRecipeDetails(id, TYPE);
  const { isRecipeFinished } = useFinishedRecipes(id, TYPE);
  const { loading } = useLoading();
  const { show, handleShare } = useShare(URL);
  const { currentRecipe: { recipe, ingredients } } = useContext(AppContext);
  const { addFavoriteRecipe, removeFavoriteRecipe,
    recipeToFavorite, isFavorite } = useFavorite(id);

  return (
    <div className="flex flex-col h-screen bg-orange-200">
      {
        loading ? <Loading /> : (
          <div className="overflow-y-scroll animate-slide-up">
            <img
              src={ recipe.strDrinkThumb }
              alt={ recipe.strDrink }
              data-testid="recipe-photo"
            />
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
                  { recipe.strDrink }
                </h1>
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
              <h4
                className="text-sm text-slate-900 my-2"
                data-testid="recipe-category"
              >
                { `Category - ${recipe.strCategory}` }
              </h4>
              <h3 className="font-semibold my-2 text-orange-600">Ingredients</h3>
              <ul className="list-disc pl-4 marker:text-orange-600">
                {ingredients.map((ingredient, index) => (
                  <li
                    className="text-sm my-1"
                    data-testid={ `${index}-ingredient-name-and-measure` }
                    key={ ingredient }
                  >
                    { ingredient }
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold my-2 text-orange-600">Instructions</h3>
              <p
                data-testid="instructions"
              >
                { recipe.strInstructions }
              </p>
            </div>
            {
              recipe.strVideo !== null && (
                <iframe
                  className="w-[300px] h-72 mx-auto"
                  src={ convertUrlToEmbed(recipe.strVideo) }
                  title="YouTube video player"
                  allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share
                  "
                  allowfullscreen
                />
              )
            }

            <div className="overflow-x-scroll mt-5 mx-2">
              <Recomendations type={ TYPE } />
            </div>
            <Link
              to={ `/foods/${id}/in-progress` }
            >
              <button
                className={
                  `${isRecipeFinished ? 'hidden' : 'block'} 
                mx-auto 
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
                type="button"
                data-testid="start-recipe-btn"
              >
                Start Recipe
              </button>
            </Link>
          </div>
        )
      }
      <Footer />
    </div>
  );
}
