import { arrToMap } from '../utils'
import {FAILURE, LOAD_CATEGORIES, REQUEST, SUCCESS} from "../constants";

const initialState = {
    entities: {},
    loading: false,
    loaded: false,
    error: null,
}

const categoriesReducer = (state = initialState, action) => {
    const {type, response, error} = action

    switch (type) {
        case LOAD_CATEGORIES + REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case LOAD_CATEGORIES + SUCCESS:
            return {
                ...state,
                entities: arrToMap(response),
                loading: false,
                loaded: true
            }
        case LOAD_CATEGORIES + FAILURE:
            return {
                ...state,
                loading: false,
                loaded: false,
                error
            }
        default:
            return state
    }
}

export default categoriesReducer

