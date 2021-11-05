const BASE_API_FOOD = 'https://www.themealdb.com/api/json/v1/1/list.php?';
const BASE_API_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';

export async function fetchFoodReq(endpoint) {
  const response = await fetch(`${BASE_API_FOOD}${endpoint}=list`);
  const responseJson = await response.json();
  return responseJson;
}

export async function fetchDrinkReq(endpoint) {
  const response = await fetch(`${BASE_API_DRINK}${endpoint}`);
  const responseJson = await response.json();
  return responseJson;
}
