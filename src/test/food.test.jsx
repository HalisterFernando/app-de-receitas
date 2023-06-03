import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';


describe('Food test suites', () => {
    beforeEach(() => {
      renderWithRouter(<App />, { route: '/foods'})
    })
    it('should render header and footer', () => {
       const pageTitle = screen.getByTestId('page-title');
       const footer = screen.getByTestId('footer')

       expect(pageTitle).toBeInTheDocument();
       expect(pageTitle.textContent).toEqual('Foods');
       expect(footer).toBeInTheDocument();       
    });
    it('should render 12 recipe cards', async () => {
      await waitFor(() => {
            const recipeCards = screen.getAllByTestId(/^[0-9]+-recipe-card$/);
          expect(recipeCards).toHaveLength(12);            
        }, {timeout: 2000});
    });
});