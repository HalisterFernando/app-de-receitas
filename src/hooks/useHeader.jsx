export default function useHeader(path) {
  const headerTitles = {
    '/main': 'Foods',
    '/drinks': 'Drinks',
    '/ingredients': 'Foods',
    '/foods': 'Foods',
    '/explore': 'Explore',
    '/explore/foods': 'Explore Foods',
    '/explore/drinks': 'Explore Drinks',
    '/explore/foods/ingredients': 'Explore Ingredients',
    '/explore/drinks/ingredients': 'Explore Ingredients',
    '/explore/foods/nationalities': 'Explore Nationalities',
    '/favorites': 'Explore Foods',
    '/favorite-recipes': 'Favorite Recipes',
    '/done-recipes': 'Done Recipes',
    '/profile': 'Profile',
    '/nationality': 'Explore Nationalities',
  };
  const paths = ['/foods', '/nationality', '/drinks'];
  const checkPath = () => paths.includes(path);
  return { checkPath, headerTitles };
}
