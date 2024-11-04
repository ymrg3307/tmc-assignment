import ArticleOverview from "../articleoverview/ArticleOverview"
import HighlvlOverviewCard from "../highlvloverviewcard/HighlvlOverviewCard"
import styles from './LatestNewsSection.module.css'
const LatestNewsSection = () => {
    return (
        <section className={styles.todaysSectionTopLevelContainer}>
            <h1 className={styles.heading}>Latest Newsletters</h1>
            <p className={styles.description}>A wealth of knowledge from India's top writers curated for you by The Morning Context.</p>
            <div className={styles.todaysArticlesContainer}>
                <ArticleOverview
                    domain='STREET SMART'
                    domainColor='#ECB731'
                    mainImageLink='/Rectangle 1352.jpg'
                    heading='Is Bandhan banking too much on microfinance?'
                    summary='In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.'
                    authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                    durationToRead='5'
                    chatCount='23'
                />
                <div style={{ marginTop: '32px', marginLeft: '20px', marginRight: '20px' }}>
                    <HighlvlOverviewCard
                        domain='STREET SMART'
                        domainColor='#ECB731'
                        mainImageLink='/Rectangle 1352.jpg'
                        heading='Johnny Depp’s doctor, nurse testify; actor expected to take stand'
                        authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                        chatCount='23'
                        hideMainImage={true}
                    />
                </div>
                <div style={{ marginTop: '32px', marginLeft: '20px', marginRight: '20px' }}>
                    <HighlvlOverviewCard
                        domain='STREET SMART'
                        domainColor='#ECB731'
                        mainImageLink='/Rectangle 1352.jpg'
                        heading='A Democrat in gym shorts tries to rally blue votes in Trump country'
                        authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                        chatCount='23'
                        hideMainImage={true}
                    />
                </div>
                <div style={{ marginTop: '32px', marginLeft: '20px', marginRight: '20px' }}>
                    <HighlvlOverviewCard
                        domain='STREET SMART'
                        domainColor='#ECB731'
                        mainImageLink='/Rectangle 1352.jpg'
                        heading='Johnny Depp’s doctor, nurse testify; actor expected to take stand'
                        authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                        chatCount='23'
                        hideMainImage={true}
                    />
                </div>
                <div style={{ marginTop: '32px', marginLeft: '20px', marginRight: '20px' }}>
                    <HighlvlOverviewCard
                        domain='STREET SMART'
                        domainColor='#ECB731'
                        mainImageLink='/Rectangle 1352.jpg'
                        heading='A Democrat in gym shorts tries to rally blue votes in Trump country'
                        authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                        chatCount='23'
                        hideMainImage={true}
                    />
                </div>
            </div>
        </section>
    )
}

export default LatestNewsSection