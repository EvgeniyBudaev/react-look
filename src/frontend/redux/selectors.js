import {createSelector} from 'reselect'

const categoriesSelector = state => state.categoriesReducer
const orderSelector = state => state.orderReducer

export const orderProductsSelector = createSelector(
    categoriesSelector,
    orderSelector,
    (categories, order) => {
    const allProducts = categories.flatMap((category) => category.products)
        console.log('res', order)
    return Object.keys(order)
        .filter((productId) => order[productId] > 0)
        .map((productId) => allProducts.find((product) => product.id === productId))
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











