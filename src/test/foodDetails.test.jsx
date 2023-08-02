import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';


describe('Food details test suites', () => {
    beforeEach(() => {
      renderWithRouter(<App />, { route: '/foods/52977'})
    })
    it('should render recipe title, image, category, ingredients, instructions and video', async () => {
       
        await waitFor(() => {
            const image = screen.getByTestId('recipe-photo');
            const title = screen.getByTestId('recipe-title');
            const category = screen.getByTestId('recipe-category');
            const ingredients = screen.getAllByTestId(/^[\d]+-ingredient-name-and-measure$/);
            const instructions = screen.getByTestId('instructions');
            const video = screen.getByTitle('YouTube video player');         
             
     
            expect(image).toBeInTheDocument();
            expect(title).toBeInTheDocument();
            expect(category).toBeInTheDocument();    
            expect(ingredients.length).toBeGreaterThan(0);    
            expect(instructions).toBeInTheDocument();    
            expect(video).toBeInTheDocument();              
            
        
        }, {timeout: 2000});    
         
    });
    // it('should render 12 recipe cards', async () => {
    //   await waitFor(() => {
    //         const recipeCards = screen.getAllByTestId(/^[0-9]+-recipe-card$/);
    //       expect(recipeCards).toHaveLength(12);            
    //     }, {timeout: 2000});
    // });
});