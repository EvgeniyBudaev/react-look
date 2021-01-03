import {normalizedCategories as defaultCategories} from '../../../api/mockapi'


const categoriesReducer = (categories = defaultCategories, action) => {
    const {type} = action

    switch (type) {
        default:
            return categories
    }
}

export default categoriesReducer

