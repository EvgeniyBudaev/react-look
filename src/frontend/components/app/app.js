import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Categories from "../categories";
import {BASKET, CATEGORIES, CHECKOUT} from "../../routes";
import Basket from "../basket";

const App = () => {
    return (
        <div>
            <Route path={CHECKOUT} component={Basket} />
            <Route path={CATEGORIES + ":restId"} component={Categories} />
        </div>
    )
}

export default App

