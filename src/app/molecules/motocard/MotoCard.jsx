import React from 'react'
import styles from './MotoCard.module.css'
import Button from '@/app/atoms/button/Button'
const MotoCard = () => {
    return (
        <div className={styles.ctaContainer}>
            <div className={styles.ctaContentContainer}>
                <span className={styles.moto}>OUR JOURNALISM</span>
                <p>The Morning Context makes you smarter with original, accurate and independent journalism.</p>
                <Button text='SUBSCRIBE' />
            </div>
        </div>
    )
}

export default MotoCard