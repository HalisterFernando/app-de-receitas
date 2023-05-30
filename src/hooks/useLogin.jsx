import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Provider';
import { setItem } from '../services/localStorageServices';

const VALID_PASSWORD_LENGTH = 7;
const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export default function useLogin() {
  const navigate = useNavigate();
  const { setUserEmail } = useContext(AppContext);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const [disable, setDisable] = useState(true);

  function validateLogin(email, password) {
    const isPasswordValid = password.length >= VALID_PASSWORD_LENGTH;
    if (isPasswordValid) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }

    const isEmailValid = EMAIL_REGEX.test(email);
    if (isEmailValid) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }

    return !(isEmailValid && isPasswordValid);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { email } = login;

    setItem('mealsToken', {});
    setItem('cocktailsToken', {});
    setItem('user', email);
    setUserEmail(email);
    navigate('/foods');
  };

  const handleChange = ({ target: { name, value } }) => {
    setLogin({ ...login, [name]: value });
  };

  useEffect(() => {
    const { email, password } = login;
    const isLoginValid = validateLogin(email, password);

    setDisable(isLoginValid);
  }, [login]);
  return { handleSubmit, handleChange, validEmail, validPassword, disable, login };
}
