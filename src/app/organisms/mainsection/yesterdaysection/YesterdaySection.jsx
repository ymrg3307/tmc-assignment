import styles from './YesterdaySection.module.css'
import OveriewCardWithbadge from '../../../molecules/overiewcardwithbadge/OveriewCardWithbadge'
import Image from 'next/image'
const YesterdaySection = () => {
    return (
        <section className={styles.yesterdaySectionContainer}>
            <div className={styles.headingContainer}>
                <div className={styles.bookmarkHeadingContainer}>
                    <Image src="/Vector_437.svg" alt='bookmark' height={15} width={16} />
                    <h3 className={styles.heading}>YESTERDAY</h3>
                </div>
                <h3 className={styles.date}>APRIL 12, 2022</h3>
            </div>
            <div className={styles.overviewCardSection}>
                <OveriewCardWithbadge leftBorderColor={'#F7A34B'}
                    cardContent={'In a notification on Monday, the Directorate General of Foreign Trade (DGFT) said that the export of COVID-19...'}
                    cardheading={'Government curbs export of COVID-19 Rapid Antigen Testing kits'}
                    marginTop='12px'
                />
                <OveriewCardWithbadge leftBorderColor={'#6C7AF6'}
                    cardContent={'On Tuesday, Prime Minister Jacinda Ardern announced a strict lockdown after confirming a new coronavirus case...'}
                    cardheading={'New Zealand announced strict lockdown over one COVID-19 case'}
                />
                <OveriewCardWithbadge leftBorderColor={'#6C7AF6'}
                    cardContent={'China on Friday has rejected the World Health Organization’s (WHO) call for a new probe into the origi...'}
                    cardheading={'China rejected WHO’s call for a new probe into COVID-19 origin'}
                />
                <OveriewCardWithbadge leftBorderColor={'#DE0046'}
                    cardContent={'China on Friday has rejected the World Health Organization’s (WHO) call for a new probe into the origi...'}
                    cardheading={'New Zealand announced strict lockdown over one COVID-19 case'}
                />
                <OveriewCardWithbadge leftBorderColor={'#6C7AF6'}
                    cardContent={'China on Friday has rejected the World Health Organization’s (WHO) call for a new probe into the origi...'}
                    cardheading={'Government curbs export of COVID-19 Rapid Antigen Testing kits'}
                />
            </div>
        </section>
    )
}

export default YesterdaySection
