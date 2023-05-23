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