//Dependencies 
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListFilms from './components/ListFilms'
import ListStarships from './components/listStarShips';
import FormStarship from './components/FormStarship'
import ListSaves from './components/ListSaves'
import Save from './components/Save'
import CardDelete from './components/CardDelete';
import Welcome from './components/Welcome'
import SelectFilm from './components/SelectFilm';

//Component
const Routes = () => 
    <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/starships' component={SelectFilm} />
        <Route exact path='/films' component={ListFilms} />
        <Route path='/films/:id' component={ListStarships} />
        <Route exact path='/edit/:id' component={FormStarship} />
        <Route path='/saves' component={ListSaves} />
        <Route exact path='/save/:id' component={Save} />
        <Route exact path='/delete/:id' component={CardDelete} />
    </Switch>
export default Routes;