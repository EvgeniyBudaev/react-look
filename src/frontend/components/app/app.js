import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {BASKET, CATEGORIES, CHECKOUT} from "../../routes";
import Basket from "../basket";
import {HOME} from "../../routes/routes";
import CategoriesPage from "../../pages/categoriesPage";

const App = () => {
    return (
        <div>
            <Switch>
                <Route path={HOME} component={() => '<h1>Домашняя страница</h1>'} exact />
                <Route path={CHECKOUT} component={Basket} />
                <Route path={CATEGORIES} component={CategoriesPage} />
                <Route path={HOME} component={() => '<h1>404 - такой страницы не существует</h1>'} />
            </Switch>
        </div>
    )
}

export default App

