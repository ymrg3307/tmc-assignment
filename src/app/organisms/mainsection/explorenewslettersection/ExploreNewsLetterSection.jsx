import HallowButton from '@/app/atoms/hallowbutton/HallowButton'
import styles from './ExploreNewsLetterSection.module.css'
import Button from '@/app/atoms/button/Button'

const ExploreNewsLetterSection = () => {
    return (
        <section className={styles.exploreNLSection}>
            <h2 className={styles.heading}>Explore newsletters on</h2>
            <div className={styles.buttonsGroup}>
                <HallowButton text='Internet' />
                <HallowButton text='Business' />
                <HallowButton text='Chaos' />
                <HallowButton text='Sports' />
                <HallowButton text='Economics' />
                <HallowButton text='Legal' />
                <HallowButton text='Science' />
                <HallowButton text='Govt Policy' />
            </div>
            <div className={styles.signupBtnContainer}>
                <Button btnWidth={'100%'} text='SIGN UP TO SUBSCRIBE' />
            </div>
        </section>
    )
}

export default ExploreNewsLetterSection