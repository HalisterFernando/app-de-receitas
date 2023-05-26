import axios from 'axios';

const MEALS_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';
const COCKTAILS_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

// verifica se o input não está vazio ou contém apenas espaços em branco
const isEmpty = (input) => input.trim().length === 0;

export const getByIngredient = async (ingredient, type) => {
  if (isEmpty(ingredient)) return;

  const endpoint = type === 'foods'
    ? `${MEALS_BASE_URL}/filter.php?i=${ingredient}`
    : `${COCKTAILS_BASE_URL}/filter.php?i=${ingredient}`;

  try {
    const response = await axios.get(endpoint);
    const option = type === 'foods' ? 'meals' : 'drinks';
    return response.data[option];
  } catch (err) {
    console.log(err);
  }
};

export const getByName = async (name, type) => {
  if (isEmpty(name)) return;

  const endpoint = type === 'foods'
    ? `${MEALS_BASE_URL}/search.php?s=${name}`
    : `${COCKTAILS_BASE_URL}/search.php?s=${name}`;

  try {
    const response = await axios.get(endpoint);
    const option = type === 'foods' ? 'meals' : 'drinks';
    return response.data[option];
  } catch (err) {
    console.log(err);
  }
};

export const getByFirstLetter = async (firstLetter, type) => {
  const endpoint = type === 'foods'
    ? `${MEALS_BASE_URL}/search.php?f=${firstLetter}`
    : `${COCKTAILS_BASE_URL}/search.php?f=${firstLetter}`;

  try {
    const response = await axios.get(endpoint);
    const option = type === 'foods' ? 'meals' : 'drinks';
    return response.data[option];
  } catch (err) {
    console.log(err);
  }
};
