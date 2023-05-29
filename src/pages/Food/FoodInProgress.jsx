import React, { useContext, useEffect, useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import { useParams } from 'react-router-dom';
import useFavorite from '../../hooks/useFavorite';
import { AppContext } from '../../context/Provider';
import FavoriteBtn from '../../components/FavoriteBtn';
import useInProgress from '../../hooks/useInProgress';
import Alert from '../../components/Alert';
import useTimeOut from '../../hooks/useTimeout';
import useLoading from '../../hooks/useLoading';
import Loading from '../../components/Loading';
import useRecipeDetails from '../../hooks/useRecipeDetails';
import useFinishedRecipes from '../../hooks/useFinishedRecipes';
import ShareBtn from '../../components/ShareBtn';

const TYPE = 'foods';

export default function FoodInProgress() {
  const { id } = useParams();
  useRecipeDetails(id, TYPE);
  const { loading } = useLoading();
  const { currentRecipe: { recipe, ingredients },
    favoriteRecipes,
    inProgressRecipes: { meals } } = useContext(AppContext);
  const { addFavoriteRecipe, removeFavoriteRecipe, recipeToFavorite } = useFavorite(TYPE);
  const { show, timeOut } = useTimeOut();
  const [isFavorite, setIsFavorite] = useState('');
  const { addIngredient, removeIngredient } = useInProgress(id, TYPE);
  const { finishRecipe } = useFinishedRecipes(TYPE);

  const mealsForId = meals[id] || [];

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

  const handleFinish = () => ingredients.length !== mealsForId.length;

  useEffect(() => {
    setIsFavorite(favoriteRecipes.some((favorite) => favorite.id === id));
  }, [favoriteRecipes]);

  return (
    loading ? <Loading /> : (
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
            <ShareBtn handleShare={ handleShare } />
            <FavoriteBtn
              recipe={ recipeToFavorite(recipe, TYPE) }
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
                className={ `${mealsForId.includes(ingredient) ? 'line-through' : ''}` }
              >
                <input
                  type="checkbox"
                  id={ id }
                  name={ ingredient }
                  value={ ingredient }
                  checked={ mealsForId.includes(ingredient) }
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
          className={
            `${handleFinish() ? 'bg-orange-200' : 'bg-orange-400'} 
          p-1 
          mx-auto 
          block 
          rounded my-4
          `
          }
          disabled={ handleFinish() }
          onClick={ () => finishRecipe(recipe) }
        >
          Finish Recipe
        </button>
      </main>
    )
  );
}
