import {createSelector} from 'reselect'

const categoriesSelector = state => state.categoriesReducer
const orderSelector = state => state.orderReducer
const productsSelector = state => state.productsReducer

export const orderProductsSelector = createSelector(
    productsSelector,
    orderSelector,
    (products, order) => {
    return Object.keys(order)
        .filter((productId) => order[productId] > 0)
        .map((productId) => products[productId])
        .map((product) => ({
            product,
            amount: order[product.id],
            subtotal: order[product.id] * product.price,
        }));
})


export const totalSelector = createSelector(
    orderProductsSelector,
    (orderProducts) =>
        orderProducts.reduce((acc, {subtotal}) => acc + subtotal, 0)
)











