import React from 'react'
import {connect} from 'react-redux'
import styles from './basket.module.scss'
import BasketCard from './basketCard/basketCard'
import BasketBottom from "./basketBottom"
import {orderProductsSelector, totalSelector} from "../../redux/selectors";
import {createStructuredSelector} from "reselect";


const Basket = (props) => {
    const {total, orderProducts} = props
    //console.log('total', total)
    //console.log('orderProducts', orderProducts)

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

const mapStateToProps = createStructuredSelector({
    total: totalSelector,
    orderProducts: orderProductsSelector,
});

export default connect(mapStateToProps)(Basket);



