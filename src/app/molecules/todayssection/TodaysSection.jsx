import React from 'react'
import styles from './TodaysSection.module.css'
import ArticleOverview from '../articleoverview/ArticleOverview'

const TodaysSection = () => {
    return (
        <section className={styles.todaysSectionTopLevelContainer}>
            <h1 className={styles.heading}>Today's Edition</h1>
            <div className={styles.todaysArticlesContainer}>
                <ArticleOverview
                    domain='BUSINESS'
                    mainImageLink='/Rectangle 1352.jpg'
                    heading='Is Bandhan banking too much on microfinance?'
                    summary='In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.'
                    authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                    durationToRead='5'
                    chatCount='23'
                />
                <ArticleOverview
                    domain='BUSINESS'
                    mainImageLink='/Rectangle 1353.jpg'
                    heading='Is Bandhan banking too much on microfinance?'
                    summary='In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.'
                    authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                    durationToRead='5'
                    chatCount='23'
                />
                <ArticleOverview
                    domain='BUSINESS'
                    mainImageLink='/Rectangle 1354.jpg'
                    heading='Is Bandhan banking too much on microfinance?'
                    summary='In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.'
                    authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                    durationToRead='5'
                    chatCount='23'
                />
            </div>
        </section>
    )
}

export default TodaysSection