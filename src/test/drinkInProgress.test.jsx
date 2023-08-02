import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';


describe('Drink in progress test suites', () => {
    beforeEach(() => {
      renderWithRouter(<App />, { route: '/drinks/15997/in-progress'})
    });
    it('should render recipe title, image, category, ingredients and instructions', async () => {
       
        await waitFor(() => {
            const image = screen.getByTestId('recipe-photo');
            const title = screen.getByTestId('recipe-title');
            const category = screen.getByTestId('recipe-category');
            const ingredients = screen.getAllByRole('checkbox');
            const instructions = screen.getByTestId('instructions');                
     
            expect(image).toBeInTheDocument();
            expect(title).toBeInTheDocument();
            expect(category).toBeInTheDocument();    
            expect(ingredients.length).toBeGreaterThan(0);    
            expect(instructions).toBeInTheDocument();                        
            
        
        }, {timeout: 2000});             
    });
    it('should not be able to click finish recipe before cheking all ingredients', async () => {
        await waitFor(() => {
            const finishRecipe = screen.getByTestId('finish-recipe-btn');

            expect(finishRecipe).toBeDisabled();
        }, {timeout: 2000});
    });
    it('should be able to click finish recipe after cheking all ingredients', async () => {
        await waitFor(() => {
            const finishRecipe = screen.getByTestId('finish-recipe-btn');

            expect(finishRecipe).toBeDisabled();

            const ingredients = screen.getAllByRole('checkbox');

            for (const ingredient of ingredients) {
                fireEvent.click(ingredient)
            }

            expect(finishRecipe).not.toBeDisabled()

        }, {timeout: 2000});
    });
});