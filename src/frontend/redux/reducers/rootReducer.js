import {combineReducers} from 'redux'
import orderReducer from "./orderReducer";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
    orderReducer,
    categoriesReducer,
})

export default rootReducer
