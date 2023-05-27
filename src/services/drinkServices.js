import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export async function fetchDrinks() {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchDrinkCategories() {
  try {
    const response = await axios.get(`${BASE_URL}/list.php?c=list`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchDrinksByCategory(category) {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchDrinkById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
