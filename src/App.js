import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context/Provider';
import Details from './pages/Details';
import DrinkRecipes from './pages/DrinkRecipes';
import Explore from './pages/Explore';
import ExploreDrink from './pages/ExploreDrink';
import ExploreDrinkIngredientes from './pages/ExploreDrinkIngredientes';
import ExploreFood from './pages/ExploreFood';
import ExploreFoodArea from './pages/ExploreFoodArea';
import ExploreFoodIngredientes from './pages/ExploreFoodIngredientes';
import Favorites from './pages/Favorites';
import FoodRecipes from './pages/FoodRecipes';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import RecipeInProgress from './pages/RecipeInProgress';
import RecipesMade from './pages/RecipesMade';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/recipes-app/comidas" component={ FoodRecipes } />
        <Route exact path="/recipes-app/bebidas" component={ DrinkRecipes } />
        <Route exact path="/recipes-app/explorar" component={ Explore } />
        <Route exact path="/recipes-app/perfil" component={ Perfil } />
        <Route exact path="/recipes-app/receitas-feitas" component={ RecipesMade } />
        <Route exact path="/recipes-app/receitas-favoritas" component={ Favorites } />
        <Route exact path="/recipes-app/explorar/comidas" component={ ExploreFood } />
        <Route exact path="/recipes-app/explorar/bebidas" component={ ExploreDrink } />
        <Route
          exact
          path="/recipes-app/explorar/comidas/ingredientes"
          component={ ExploreFoodIngredientes }
        />
        <Route
          exact
          path="/recipes-app/explorar/comidas/area"
          component={ ExploreFoodArea }
        />
        <Route
          exact
          path="/recipes-app/explorar/bebidas/ingredientes"
          component={ ExploreDrinkIngredientes }
        />
        <Route
          exact
          path="/recipes-app/comidas/:id"
          render={ (props) => <Details { ...props } /> }
        />
        <Route
          exact
          path="/recipes-app/bebidas/:id"
          render={ (props) => <Details { ...props } /> }
        />
        <Route
          exact
          path="/recipes-app/comidas/:id/in-progress"
          render={ (props) => <RecipeInProgress { ...props } /> }
        />
        <Route
          exact
          path="/recipes-app/bebidas/:id/in-progress"
          render={ (props) => <RecipeInProgress { ...props } /> }
        />
        <Route exact path="/recipes-app" component={ Login } />
        <Route component={ NotFound } />
      </Switch>
    </Provider>
  );
}

export default App;
