import React from 'react'
import {Link} from 'react-router-dom'
import styles from './basketBottom.module.scss'
import Button from '../../UI/button/button'
import {CATEGORIES, CHECKOUT} from "../../../routes";

const BasketBottom = (props) => {
    const {total} = props

    return (
        <div className={styles.basketBottom}>
            <div className={styles.left}>
                <Link to={CATEGORIES}>Продолжить выбор товаров</Link>
            </div>
            <div className={styles.right}>
                <div className={styles.rightInfo}>
                    <p>Итого: <span className={styles.semiBold}>{total}</span> рублей</p>
                    <p>+ доставка в <Link to={CATEGORIES}>г. Москва</Link></p>
                    <p>1-2 дня <span className={styles.uppercase}>БЕСПЛАТНО</span></p>
                    <p>
                        Информация о условиях доставки будет уточнена после оформления заказа.
                    </p>
                </div>

                <Link to={CHECKOUT}>
                    <Button text={'Оформить заказ'} />
                </Link>

            </div>
        </div>
    )
}

export default BasketBottom
