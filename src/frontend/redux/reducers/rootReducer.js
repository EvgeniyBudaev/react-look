import {combineReducers} from 'redux'
import orderReducer from "./orderReducer";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
    orderReducer,
    categoriesReducer,
    productsReducer,
})

export default rootReducer
