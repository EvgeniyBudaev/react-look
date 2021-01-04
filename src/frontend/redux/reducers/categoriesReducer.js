import { arrToMap } from '../utils'
import {LOAD_CATEGORIES} from "../constants";


const categoriesReducer = (state = {}, action) => {
    const {type, response} = action

    switch (type) {
        case LOAD_CATEGORIES:
            return arrToMap(response)
        default:
            return state
    }
}

export default categoriesReducer

