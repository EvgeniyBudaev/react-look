import {DECREMENT, INCREMENT, LOAD_CATEGORIES, LOAD_PRODUCTS, REMOVE} from "../constants";

export const increment = (id) => ({type: INCREMENT, payload: {id} })
export const decrement = (id) => ({type: DECREMENT, payload: {id} })
export const remove = (id) => ({type: REMOVE, payload: {id}})

export const loadCategories = () => ({
    type: LOAD_CATEGORIES,
    CallAPI: '/api/categories'
});

export const loadProducts = (categoryId) => ({
    type: LOAD_PRODUCTS,
    CallAPI: `/api/products?id=${categoryId}`,
    categoryId,
});