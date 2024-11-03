import styles from './HighlvlOverviewCard.module.css'
import { Chat } from 'react-bootstrap-icons'
import Image from 'next/image'

const HighlvlOverviewCard = (props) => {
    const { domain, domainColor = '#2CB680', hideMainImage = false, mainImageLink, heading, authorDetails, chatCount } = props
    const { authorImageLink, authorName } = authorDetails
    return (
        <div className={styles.articleContainer}>
            <h3 className={styles.articleDomain} style={{ color: domainColor }}>{domain}</h3>
            {!hideMainImage && <Image className={styles.compNameImg} src={mainImageLink} alt='logo' width={254} height={128} />}
            <h1 className={styles.articleHeading}>{heading}</h1>
            <hr className={styles.divideLine} />
            <div className={styles.articleOverViewBottomSection}>
                <div className={styles.authorDetailsContainer}>
                    <Image className={styles.authorImg} src={authorImageLink} alt='author-image' width={30} height={30} />
                    <p className={styles.authorName}>{authorName}</p>
                </div>
                <div className={styles.chatIconMsgContainer}>
                    <Chat className={styles.chatIcon} height={18} width={18} color='#D9D9D9' />
                    <p className={styles.chatCount}>{chatCount}</p>
                </div>
            </div>
        </div>
    )
}

export default HighlvlOverviewCard