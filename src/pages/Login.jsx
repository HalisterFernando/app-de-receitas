import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginBG from '../assets/login.jpg';
import validateLogin from '../services/loginServices';
import { setItem } from '../services/localStorageServices';
import { AppContext } from '../context/Provider';

export default function Login() {
  const navigate = useNavigate();
  const { setUserEmail } = useContext(AppContext);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [disable, setDisable] = useState(true);

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

  return (
    <form
      className="h-screen flex items-center justify-center bg-cover"
      style={ { backgroundImage: `url(${LoginBG})` } }
      onSubmit={ handleSubmit }
    >
      <div
        className="
        w-72
        h-72
        p-5
        bg-slate-50
        bg-opacity-90
        rounded
        shadow-lg
        flex
        flex-col
        items-center
        justify-center
        gap-4
      "
      >
        <h2 className="mb-5">Bem-vindo ao Du Cheff</h2>
        <label htmlFor="email" className="flex flex-col justify-center items-center">
          <input
            className="border-2 border-orange-400 w-[95%] rounded px-2 py-1"
            id="email"
            name="email"
            type="text"
            value={ login.email }
            onChange={ (ev) => handleChange(ev) }
            placeholder="E-mail"
            data-testid="email-input"
          />
        </label>
        <label
          htmlFor="password"
          className="flex flex-col justify-center items-center"
        >
          <input
            className="border-2 border-orange-400 w-[95%] rounded px-2 py-1"
            id="password"
            type="password"
            name="password"
            value={ login.password }
            onChange={ handleChange }
            placeholder="Senha"
            data-testid="password-input"
          />
        </label>
        <button
          type="submit"
          className={
            `
            w-1/2 
            px-2 
            py-1 
            mt-5 
            rounded 
            shadow-lg 
            ${disable ? 'bg-orange-200' : 'bg-orange-400'}
            `
          }
          data-testid="login-submit-btn"
          disabled={ disable }
        >
          Login
        </button>
      </div>
    </form>

  );
}
