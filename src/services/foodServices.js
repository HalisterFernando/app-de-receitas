import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMeals = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMealNationalities = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/list.php?a=list`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMealById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMealByNationality = async (nationality) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?a=${nationality}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMealCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/list.php?c=list`);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const fetchMealsByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchRandomMeal = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/random.php`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMealIngredients = async () => {
  try {
    const response = await axios.get(`${BASE_URL}//list.php?i=list`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMealByIngredient = async (ingredient) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?i=${ingredient}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
