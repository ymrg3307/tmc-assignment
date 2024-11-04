'use client';

import RecentNewsCard from '../recentnewscard/RecentNewsCard';
import styles from './RecentNews.module.css'
import ScrollContainer from 'react-indiana-drag-scroll'

const RecentNews = () => {
    return (
        <section 
            className={styles.recentNewsContainer}
            aria-label="Recent Breaking News"
        >
            <h2 className={styles.visuallyHidden}>Recent Breaking News</h2>
            <ScrollContainer 
                className="scroll-container" 
                style={{ padding: 0 }} 
                vertical={false}
                role="region"
                aria-label="Scrollable news feed"
            >
                <ul className={styles.itemsContainer} role="list">
                    <li>
                        <RecentNewsCard
                            labelText='BREAKING'
                            timeAgo={24}
                            content="Russian Navy's warship is either floating abandoned or at the bottom of the Black Sea"
                        />
                    </li>
                    <li>
                        <RecentNewsCard
                            labelText='BREAKING'
                            timeAgo={5}
                            content="Why the US is giving new, heavier weapons to Ukraine"
                            isBreakingNews={true}
                        />
                    </li>
                    <li>
                        <RecentNewsCard
                            labelText='BREAKING'
                            timeAgo={24}
                            content="Russian Navy's warship is either floating abandoned or at the bottom of the Black Sea"
                        />
                    </li>
                    <li>
                        <RecentNewsCard
                            labelText='BREAKING'
                            timeAgo={24}
                            content="Russian Navy's warship is either floating abandoned or at the bottom of the Black Sea"
                        />
                    </li>
                </ul>
            </ScrollContainer>
        </section>
    )
}

export default RecentNews