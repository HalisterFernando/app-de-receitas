import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';


describe('Explore food by nationality test suites', () => {
    beforeEach(() => {
      renderWithRouter(<App />, { route: '/'})
      fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'test@example.com' } });
      fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'password123' } });
      fireEvent.submit(screen.getByTestId('login-submit-btn'));
      fireEvent.click(screen.getByTestId('explore-bottom-btn'));
      fireEvent.click(screen.getByTestId('explore-foods'));
      fireEvent.click(screen.getByTestId('explore-by-nationality'));
    })
    it('should render 29 nationalities', async () => {       
        await waitFor(() => {          
            const nationalities = screen.getAllByTestId(/^explore-by-[\w]+-dropdown$/);
            
            expect(nationalities).toHaveLength(29);    
        }, {timeout: 2000});
    });
});