import React from 'react'
import {connect} from 'react-redux'
import styles from './basket.module.scss'
import BasketCard from './basketCard/basketCard'
import BasketBottom from "./basketBottom";


const Basket = (props) => {
    const {total, orderProducts} = props
    console.log('total, orderProducts', total, orderProducts)

    if (!total) {
        return (
            <div className={styles.basket}>
                <h4 className={styles.title}>В корзине нет выбранных товаров</h4>
            </div>
        )
    }

    return (
        <section className={styles.basket}>
            <div className={styles.container}>
                <h2 className={styles.title}>Корзина</h2>
                <div className={styles.cards}>
                    {orderProducts.map(({product, amount, subtotal}) => (
                        <BasketCard
                            product={product}
                            amount={amount}
                            key={product.id}
                            subtotal={subtotal}
                        />
                    ))}

                    <BasketBottom total={total} />
                </div>
            </div>
        </section>
    )
}

export default connect((state) => {
    const allProducts = state.categoriesReducer.flatMap((category) => category.products)

    const orderProducts = Object.keys(state.orderReducer)
        .filter((productId) => state.orderReducer[productId] > 0)
        .map((productId) => allProducts.find((product) => product.id === productId))
        .map((product) => ({
            product,
            amount: state.orderReducer[product.id],
            subtotal: state.orderReducer[product.id] * product.price,
        }))

    const total = orderProducts.reduce((acc, {subtotal}) => acc + subtotal, 0)

    return {
        total,
        orderProducts,
    }
})(Basket)



