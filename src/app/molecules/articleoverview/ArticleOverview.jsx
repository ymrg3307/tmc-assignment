import React from 'react'
import styles from './ArticleOverview.module.css'
import Image from 'next/image'
import { Chat } from 'react-bootstrap-icons'

const ArticleOverview = (props) => {
    const { domain,domainColor='#2CB680', mainImageLink, heading, summary, authorDetails, durationToRead, chatCount } = props
    const { authorImageLink, authorName } = authorDetails

    return (
        <div className={styles.articleOverviewContainer}>
            <h3 className={styles.articleDomain} style={{color:domainColor}}>{domain}</h3>
            <Image className={styles.compNameImg} src={mainImageLink} alt='logo' width={335} height={210} />
            <h1 className={styles.articleHeading}>{heading}</h1>
            <p className={styles.articleSummary}>{summary}</p>
            <hr className={styles.divideLine} />
            <div className={styles.articleOverViewBottomSection}>
                <div className={styles.authorDetailsContainer}>
                    <Image className={styles.authorImg} src={authorImageLink} alt='author-image' width={30} height={30} />
                    <p className={styles.authorName}>{authorName}</p>
                </div>
                <div className={styles.chatDurationContainer}>
                    <p className={styles.durationText}> {`${durationToRead} min read`}</p>
                    <div className={styles.chatIconMsgContainer}>
                        <Chat className={styles.chatIcon} height={18} width={18} color='#D9D9D9' />
                        <p className={styles.chatCount}>{chatCount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleOverview