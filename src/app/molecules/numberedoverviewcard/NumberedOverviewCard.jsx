import styles from './NumberedOverviewCard.module.css'

import HighlvlOverviewCard from '../highlvloverviewcard/HighlvlOverviewCard'

const NumberedOverviewCard = (props) => {
    const { articleNumber, domain, hideMainImage = false, mainImageLink, heading, authorDetails, chatCount } = props
    return (
        <div className={styles.numberedOverviewCardTopContainer}>
            <h2 className={styles.articleNumber}>{articleNumber}</h2>
            <HighlvlOverviewCard
                domain={domain}
                hideMainImage={hideMainImage}
                mainImageLink={mainImageLink}
                authorDetails={authorDetails}
                chatCount={chatCount}
                heading={heading}
            />
        </div>
    )
}

export default NumberedOverviewCard