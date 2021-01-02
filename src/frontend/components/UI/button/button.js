import React from 'react'
import styles from './button.module.scss'

const Button = (props) => {
    const {text} = props
    return (
        <button className={styles.button}>{text}</button>
    )
}

export default Button
