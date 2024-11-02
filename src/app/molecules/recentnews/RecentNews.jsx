'use client';

import RecentNewsCard from '../recentnewscard/RecentNewsCard';
import styles from './RecentNews.module.css'
import ScrollContainer from 'react-indiana-drag-scroll'
const RecentNews = () => {
    return (
        <div className={styles.recentNewsContainer}>
            <ScrollContainer className="scroll-container" style={{ padding: 0 }} vertical={false}>
                <div className={styles.itemsContainer}>
                    <RecentNewsCard
                        labelText='BREAKING'
                        timeAgo={24}
                        content="Russian Navy's warship is either floating abandoned or at the bottom of the Black Sea"
                    />
                    <RecentNewsCard
                        labelText='BREAKING'
                        timeAgo={5}
                        content="Why the US is giving new, heavier weapons to Ukraine"
                        isBreakingNews={true}
                    />
                    <RecentNewsCard
                        labelText='BREAKING'
                        timeAgo={24}
                        content="Russian Navy's warship is either floating abandoned or at the bottom of the Black Sea"
                    />
                    <RecentNewsCard
                        labelText='BREAKING'
                        timeAgo={24}
                        content="Russian Navy's warship is either floating abandoned or at the bottom of the Black Sea"
                    />
                </div>
            </ScrollContainer>
        </div>

    )
}

export default RecentNews