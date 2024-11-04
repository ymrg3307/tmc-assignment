'use client';

import ScrollContainer from 'react-indiana-drag-scroll'
import NumberedOverviewCard from '../numberedoverviewcard/NumberedOverviewCard'
import styles from './TopStoriesSection.module.css'

const TopStoriesSection = () => {
    return (
        <section className={styles.topStoriesTopContainer}>
            <h2 className={styles.mainHeading}>Top Stories</h2>
            <ScrollContainer style={{ padding: 0 }} vertical={false}>
                <div className={styles.numberedCardsContainer}>
                    <NumberedOverviewCard
                        articleNumber={1}
                        domain='BUSINESS'
                        mainImageLink='/ts1.jpg'
                        heading='Is Bandhan banking too much on microfinance?'
                        summary='In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.'
                        authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                        durationToRead='5'
                        chatCount='23'
                    />
                    <NumberedOverviewCard
                        articleNumber={2}
                        domain='BUSINESS'
                        mainImageLink='/Rectangle 1352.jpg'
                        heading='Is Bandhan banking too much on microfinance?'
                        summary='In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.'
                        authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                        durationToRead='5'
                        chatCount='23'
                    />
                    <NumberedOverviewCard
                        articleNumber={3}
                        domain='BUSINESS'
                        mainImageLink='/Rectangle 1353.jpg'
                        heading='Is Bandhan banking too much on microfinance?'
                        summary='In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.'
                        authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                        durationToRead='5'
                        chatCount='23'
                    />
                    <NumberedOverviewCard
                        articleNumber={4}
                        domain='BUSINESS'
                        mainImageLink='/Rectangle 1354.jpg'
                        heading='Is Bandhan banking too much on microfinance?'
                        summary='In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.'
                        authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                        durationToRead='5'
                        chatCount='23'
                    />
                    <NumberedOverviewCard
                        articleNumber={5}
                        domain='BUSINESS'
                        mainImageLink='/ts1.jpg'
                        heading='Is Bandhan banking too much on microfinance?'
                        summary='In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.'
                        authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                        durationToRead='5'
                        chatCount='23'
                    />
                    <NumberedOverviewCard
                        articleNumber={6}
                        domain='BUSINESS'
                        mainImageLink='/Rectangle 1352.jpg'
                        heading='Is Bandhan banking too much on microfinance?'
                        summary='In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.'
                        authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                        durationToRead='5'
                        chatCount='23'
                    />
                    <NumberedOverviewCard
                        articleNumber={7}
                        domain='BUSINESS'
                        mainImageLink='/Rectangle 1353.jpg'
                        heading='Is Bandhan banking too much on microfinance?'
                        summary='In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.'
                        authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                        durationToRead='5'
                        chatCount='23'
                    />
                    <NumberedOverviewCard
                        articleNumber={8}
                        domain='BUSINESS'
                        mainImageLink='/Rectangle 1354.jpg'
                        heading='Is Bandhan banking too much on microfinance?'
                        summary='In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.'
                        authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                        durationToRead='5'
                        chatCount='23'
                    />
                    <NumberedOverviewCard
                        articleNumber={9}
                        domain='BUSINESS'
                        mainImageLink='/ts1.jpg'
                        heading='Is Bandhan banking too much on microfinance?'
                        summary='In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.'
                        authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                        durationToRead='5'
                        chatCount='23'
                    />
                    <NumberedOverviewCard
                        articleNumber={10}
                        domain='BUSINESS'
                        mainImageLink='/Rectangle 1352.jpg'
                        heading='Is Bandhan banking too much on microfinance?'
                        summary='In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.'
                        authorDetails={{ authorName: 'Ashish K. Mishra', authorImageLink: '/Face.jpg' }}
                        durationToRead='5'
                        chatCount='23'
                    />
                </div>
            </ScrollContainer>
        </section>
    )
}

export default TopStoriesSection