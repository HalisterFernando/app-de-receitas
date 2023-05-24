import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Food from './pages/Food/Food';
import FoodDetails from './pages/Food/FoodDetails';
import FoodInProgress from './pages/Food/FoodInProgress';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/foods" element={ <Food /> } />
      <Route path="/foods/:id" element={ <FoodDetails /> } />
      <Route path="/foods/:id/in-progress" element={ <FoodInProgress /> } />
      {/* <Route path="/drinks" element={<Drink />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/done-recipes" element={<DoneRecipes />} />
      <Route path="/favorite-recipes" element={<FavoriteRecipes />} />
      <Route path="/drinks/:id" element={<DrinkDetails />} />
      <Route path="/drinks/:id/in-progress" element={<DrinkProgress />} />
      <Route path="/explore/drinks" element={<ExploreDrinks />} />
      <Route path="/explore/foods" element={<ExploreFoods />} />
      <Route path="/explore/foods/ingredients" element={<FoodIngredients />} />
      <Route path="/explore/drinks/ingredients" element={<DrinkIngredients />} />
      <Route path="/explore/foods/nationalities" element={<FoodNationalities />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
