import {DECREMENT, INCREMENT, LOAD_CATEGORIES, REMOVE} from "../constants";

export const increment = (id) => ({type: INCREMENT, payload: {id} })
export const decrement = (id) => ({type: DECREMENT, payload: {id} })
export const remove = (id) => ({type: REMOVE, payload: {id}})

export const loadCategories = () => ({
    type: LOAD_CATEGORIES,
    CallAPI: '/api/categories'
})