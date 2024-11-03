import React from 'react'
import styles from './TopStoryCard.module.css'
import Image from 'next/image'
import { Chat } from 'react-bootstrap-icons'

const TopStoryCard = (props) => {
    const { domain, mainImageLink, heading, summary, authorDetails, durationToRead, chatCount } = props
    const { authorImageLink, authorName } = authorDetails

    return (
        <div className={styles.articleOverviewContainer}>
            <div>
                <h2>1</h2>
            </div>
            <div>
                <h3 className={styles.articleDomain}>{domain}</h3>
                <Image className={styles.compNameImg} src={mainImageLink} alt='logo' width={335} height={210} />
                <h1 className={styles.articleHeading}>{heading}</h1>
                <hr className={styles.divideLine} />
                <div className={styles.articleOverViewBottomSection}>
                    <div className={styles.authorDetailsContainer}>
                        <Image className={styles.authorImg} src={authorImageLink} alt='author-image' width={30} height={30} />
                        <p className={styles.authorName}>{authorName}</p>
                    </div>
                    <div className={styles.chatDurationContainer}>
                        <div className={styles.chatIconMsgContainer}>
                            <Chat className={styles.chatIcon} height={18} width={18} color='#D9D9D9' />
                            <p className={styles.chatCount}>{chatCount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopStoryCard