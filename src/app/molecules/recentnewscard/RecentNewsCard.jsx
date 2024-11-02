import React from 'react'
import styles from './RecentNewsCard.module.css'

const RecentNewsCard = (props) => {
    const { isBreakingNews = false, labelText, timeAgo, content } = props
    return (
        <div className={styles.recentNewsCard}>
            <div className={styles.labelTimeContainer}>
                {
                    isBreakingNews &&
                    (
                        <div className={styles.labelContainer}>
                            <p className={styles.labelText}>{labelText}</p>
                        </div>
                    )
                }
                <p className={`${styles.cardTimeText} ${ isBreakingNews && styles.cardTimeTextMargin}`}>{timeAgo} Minutes ago</p>
            </div>
            <p className={styles.cardContent}>{content}</p>
        </div>
    )
}

export default RecentNewsCard