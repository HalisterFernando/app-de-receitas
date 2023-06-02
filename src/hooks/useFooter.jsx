import { useNavigate } from 'react-router-dom';

export default function useFooter() {
  const navigate = useNavigate();
  const foodsPathname = window.location.pathname === '/foods';
  const drinksPathname = window.location.pathname === '/drinks';
  const explorePathname = window.location.pathname === '/explore';

  return { navigate, foodsPathname, drinksPathname, explorePathname };
}
