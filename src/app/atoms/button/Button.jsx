import React from 'react'
import styles from './button.module.css'

const Button = ({ text }) => {
    return (
        <button className={styles.headerButton} >{text}</button>
    )
}

export default Button