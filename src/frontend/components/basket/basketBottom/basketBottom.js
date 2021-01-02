import React from 'react'
import styles from './basketBottom.module.scss'
import Button from '../../UI/button/button'

const BasketBottom = (props) => {
    const {total} = props

    return (
        <div className={styles.basketBottom}>
            <div className={styles.left}>
                <a href="#">Продолжить выбор товаров</a>
            </div>
            <div className={styles.right}>
                <div className={styles.rightInfo}>
                    <p>Итого: <span className={styles.semiBold}>{total}</span> рублей</p>
                    <p>+ доставка в <a href="#">г. Москва</a></p>
                    <p>1-2 дня <span className={styles.uppercase}>БЕСПЛАТНО</span></p>
                    <p>
                        Информация о условиях доставки будет уточнена после оформления заказа.
                    </p>
                </div>

                    <Button text={'Оформить заказ'} />

            </div>
        </div>
    )
}

export default BasketBottom
