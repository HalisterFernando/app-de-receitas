import { describe, it, expect, vi } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Login tests suites', () => {
  it('should render the form and handle the input changes', () => {
    renderWithRouter(<App />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password');
  });
  it('should be able to login if correct email and password is provided', () => {
    renderWithRouter(<App />);

    const submitButton = screen.getByTestId('login-submit-btn');

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeDisabled();

    
    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'password123' } });

    expect(submitButton).not.toBeDisabled();  
  });
  it('should not be able to login if incorrect email and password is provided', () => {
    renderWithRouter(<App />);

    const submitButton = screen.getByTestId('login-submit-btn');

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeDisabled();

    
    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'test@example' } });
    fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'passw' } });

    expect(submitButton).toBeDisabled();
  });
  it('should create localStorage keys and navigate to "/foods"', () => {
    renderWithRouter(<App />);

    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'password123' } });

    fireEvent.submit(screen.getByTestId('login-submit-btn'));    

    expect(localStorage.getItem('mealsToken')).toEqual('{}');
    expect(localStorage.getItem('cocktailsToken')).toEqual('{}');
    expect(localStorage.getItem('user')).toEqual('\"test@example.com\"');
    
    expect(window.location.pathname).toBe('/foods');    

  });
});
