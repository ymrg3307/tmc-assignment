import styles from './OveriewCardWithbadge.module.css'
const OveriewCardWithbadge = ({ cardheading, cardContent, leftBorderColor, marginTop = '24px' }) => {
    return (
        <div
            className={`${styles.overViewCardContainer}`}
            style={{ borderLeftColor: `${leftBorderColor ?? '#F7A34B'}`,marginTop:`${marginTop}` }}
        >
            <h2 className={styles.overvieCardHeading}>
                {cardheading}
            </h2>
            <p className={styles.overvieCardContent}>
                {cardContent}
            </p>
        </div>
    )
}

export default OveriewCardWithbadge