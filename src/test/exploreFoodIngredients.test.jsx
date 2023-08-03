import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';


describe('Explore food ingredients test suites', () => {
    beforeEach(() => {
      renderWithRouter(<App />, { route: '/'})
      fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'test@example.com' } });
      fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'password123' } });
      fireEvent.submit(screen.getByTestId('login-submit-btn'));
      fireEvent.click(screen.getByTestId('explore-bottom-btn'));
      fireEvent.click(screen.getByTestId('explore-foods'));
      fireEvent.click(screen.getByTestId('explore-by-ingredient'));
    })
    it('should render 12 ingredients', async () => {       
        await waitFor(() => {          
            const ingredients = screen.getAllByTestId(/^[\d]+-ingredient-card$/);
            
            expect(ingredients).toHaveLength(12);    
        }, {timeout: 2000});
    });
});