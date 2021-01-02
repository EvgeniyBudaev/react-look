import {mirrors} from '../../../api/mockapi'

const {categories} = mirrors
const defaultRestaurants = categories

const categoriesReducer = (categories = defaultRestaurants, action) => {
    const {type} = action

    switch (type) {
        default:
            return categories
    }
}

export default categoriesReducer

