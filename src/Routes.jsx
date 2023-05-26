import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Food from './pages/Food/Food';
import FoodDetails from './pages/Food/FoodDetails';
import FoodInProgress from './pages/Food/FoodInProgress';
import DoneRecipes from './pages/DoneRecipes';
import Explore from './pages/Explore/Explore';
import ExploreFoods from './pages/Explore/ExploreFoods';
import ExploreDrinks from './pages/Explore/ExploreDrinks';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Profile from './pages/Profile';
import ExploreFoodIngredients from './pages/Explore/ExploreFoodIngredients';
import ExploreFoodNationality from './pages/Explore/ExploreFoodNationality';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/foods" element={ <Food /> } />
      <Route path="/foods/:id" element={ <FoodDetails /> } />
      <Route path="/foods/:id/in-progress" element={ <FoodInProgress /> } />
      <Route path="/done-recipes" element={ <DoneRecipes /> } />
      <Route path="/explore" element={ <Explore /> } />
      <Route path="/explore/foods" element={ <ExploreFoods /> } />
      <Route path="/explore/drinks" element={ <ExploreDrinks /> } />
      <Route path="/favorite-recipes" element={ <FavoriteRecipes /> } />
      <Route path="/profile" element={ <Profile /> } />
      <Route path="/explore/foods/ingredients" element={ <ExploreFoodIngredients /> } />
      <Route path="/explore/foods/nationalities" element={ <ExploreFoodNationality /> } />
      {/* <Route path="/drinks" element={<Drink />} />
      <Route path="/drinks/:id" element={<DrinkDetails />} />
      <Route path="/drinks/:id/in-progress" element={<DrinkProgress />} />
      <Route path="/explore/drinks/ingredients" element={<DrinkIngredients />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
