import {normalizedProducts} from '../../../api/mockapi'

const defaultProducts = normalizedProducts.reduce(
    (acc, product) => ({...acc, [product.id]: product}),
    {})

// { [productId]: product }
const productsReducer = (products = defaultProducts, action) => {
    const {type} = action

    switch (type) {
        default:
            return products
    }
}

export default productsReducer
