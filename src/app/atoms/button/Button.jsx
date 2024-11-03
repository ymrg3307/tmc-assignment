import React from 'react'
import styles from './button.module.css'

const Button = ({ text, btnWidth }) => {
    return (
        <button className={styles.headerButton} style={{ width: btnWidth ?? null }}>{text}</button>
    )
}

export default Button