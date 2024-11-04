import styles from './MotoCard.module.css'
import Button from '@/app/atoms/button/Button'
import Image from 'next/image'
const MotoCard = () => {
    return (

        <div className={styles.morningContextImageCOntainer}>
            <div className={styles.ctaContainer}>
                <div className={styles.topLineContainer}>
                    <div className={styles.halfBorder}></div>
                    <span className={styles.ctaHeading}>OUR JOURNALISM</span>
                    <div className={styles.halfBorder}></div>
                </div>
                <div className={styles.ctaContentContainer}>
                    <p>The Morning Context makes you smarter with original, accurate and independent journalism.</p>
                    <Button text='SUBSCRIBE' />
                </div>
            </div>
        </div>

    )
}

export default MotoCard