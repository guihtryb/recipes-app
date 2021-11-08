const BASE_API_FOOD = 'https://www.themealdb.com/api/json/v1/1/';
const BASE_API_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/';
const BASE_FOOD_INGREDIENTS_IMAGE = 'https://www.themealdb.com/images/ingredients/';
const BASE_DRINK_INGREDIENTS_IMAGE = 'https://www.thecocktaildb.com/images/ingredients/';

export async function fetchFoodReq(type, firstEndPoint, secondEndPoint) {
  const response = await
  fetch(`${BASE_API_FOOD}${type}.php?${firstEndPoint}=${secondEndPoint}`);

  const responseJson = await response.json();
  return responseJson;
}

export async function fetchDrinkReq(type, firstEndPoint, secondEndPoint) {
  const response = await
  fetch(`${BASE_API_DRINK}${type}.php?${firstEndPoint}=${secondEndPoint}`);

  const responseJson = await response.json();
  return responseJson;
}

export async function fetchFoodIngImages(ingredient) {
  const image = await fetch(`${BASE_FOOD_INGREDIENTS_IMAGE}${ingredient}.png`);
  return image;
}

export async function fetchDrinksIngImages(ingredient) {
  const image = await fetch(`${BASE_DRINK_INGREDIENTS_IMAGE}${ingredient}.png`);
  return image;
}

export const AppData = {
  getFoodData: async () => [
    {
      title: 'Categorias',
      items: await fetchFoodReq('list', 'c', 'list'),
    },
    {
      title: 'Areas',
      items: await fetchFoodReq('list', 'a', 'list'),
    },
    {
      title: 'Ingredientes',
      items: await fetchFoodReq('list', 'i', 'list'),
    },
    {
      title: 'Receitas',
      items: await fetchFoodReq('search', 's', ''),
    },
  ],
  getDrinkLists: async () => [
    {
      title: 'Categorias',
      items: await fetchDrinkReq('list', 'c', 'list'),
    },
    {
      title: 'Glasses',
      items: await fetchDrinkReq('list', 'g', 'list'),
    },
    {
      title: 'Ingredientes',
      items: await fetchDrinkReq('list', 'i', 'list'),
    },
    {
      title: 'Alcólico',
      items: await fetchDrinkReq('list', 'a', 'list'),
    },
    {
      title: 'Receitas',
      items: await fetchFoodReq('search', 's', ''),
    },
  ],
};
