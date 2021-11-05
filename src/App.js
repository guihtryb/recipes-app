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

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/comidas" component={ FoodRecipes } />
        <Route exact path="/bebidas" component={ DrinkRecipes } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/perfil" component={ Perfil } />
        <Route exact path="/receitas-feitas" component={ RecipesMade } />
        <Route exact path="/receitas-favoritas" component={ Favorites } />
        <Route exact path="/explorar/comidas" component={ ExploreFood } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrink } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExploreFoodIngredientes }
        />
        <Route
          exact
          path="/explorar/comidas/area"
          component={ ExploreFoodArea }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinkIngredientes }
        />
        <Route
          exact
          path="/comidas/:id"
          render={ (props) => <Details { ...props } /> }
        />
        <Route
          exact
          path="/bebidas/:id"
          render={ (props) => <Details { ...props } /> }
        />
        <Route
          exact
          path="/comidas/:id/in-progress"
          render={ (props) => <RecipeInProgress { ...props } /> }
        />
        <Route
          exact
          path="/bebidas/:id/in-progress"
          render={ (props) => <RecipeInProgress { ...props } /> }
        />
        <Route path="/" component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
