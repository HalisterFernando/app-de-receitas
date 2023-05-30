import React from 'react';
import useLogin from '../hooks/useLogin';
import Logo from '../assets/logo.png';
import Check from '../assets/check.png';

export default function Login() {
  const { handleChange, handleSubmit, disable, login: { email, password },
    validEmail, validPassword } = useLogin();

  return (
    <div
      className="
      h-screen
      flex
      flex-col
      items-center
      justify-center
      bg-gradient-to-t from-orange-200"
    >
      <div className="h-80 w-80 animate-slide-down">
        <img className="h-full w-full object-" src={ Logo } alt="" />
      </div>
      <form
        onSubmit={ handleSubmit }
        className="
        w-72
        h-56
        flex
        flex-col
        items-center
        justify-evenly
        gap-1
        animate-slide-up
      "
      >
        <label htmlFor="email" className="flex justify-center items-center relative">
          <input
            className="border-2 border-orange-400 w-[95%] rounded-full p-3"
            id="email"
            name="email"
            type="text"
            value={ email }
            onChange={ handleChange }
            placeholder="E-mail"
            data-testid="email-input"
          />
          <img
            className={ `
          h-5
          w-5
          absolute
          right-0
          border-2
          border-orange-400
          rounded-full          
          ${validEmail ? 'block' : 'hidden'}` }
            src={ Check }
            alt=""
          />
        </label>
        <div
          className={
            `${!validEmail && email.length >= 1
              ? 'block text-sm'
              : 'hidden'}
              bg-black
              text-white
              px-2
              py-1
              rounded-full
              `
          }
        >
          Please provide a valid email address

        </div>

        <label
          htmlFor="password"
          className="flex justify-center items-center relative"
        >
          <input
            className="border-2 border-orange-400 w-[95%] rounded-full p-3"
            id="password"
            type="password"
            name="password"
            value={ password }
            onChange={ handleChange }
            placeholder="Password"
            data-testid="password-input"
          />
          <img
            className={ `
          h-5
          w-5
          absolute
          right-0
          border-2
          border-orange-400
          rounded-full
          ${validPassword ? 'block' : 'hidden'}` }
            src={ Check }
            alt=""
          />
        </label>
        <div
          className={
            `${!validPassword && password.length >= 1
              ? 'block text-sm'
              : 'hidden'}
              bg-black
              text-white
              px-2
              py-1
              rounded-full
              `
          }
        >
          Please enter a minimum of 7 characters.

        </div>
        <button
          type="submit"
          className={
            `
            w-1/2 
            p-2
            mt-5 
            rounded-full 
            shadow-md
            shadow-black
            ${disable ? 'bg-orange-100' : 'bg-orange-400'}
            `
          }
          data-testid="login-submit-btn"
          disabled={ disable }
        >
          Login
        </button>
      </form>
    </div>

  );
}
