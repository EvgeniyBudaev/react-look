import {normalizedCategories} from '../../../api/mockapi'
import { arrToMap } from '../utils'


const categoriesReducer = (state = arrToMap(normalizedCategories), action) => {
    const {type} = action

    switch (type) {
        default:
            return state
    }
}

export default categoriesReducer

