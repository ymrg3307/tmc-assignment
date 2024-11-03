import styles from './HallowButton.module.css'

const HallowButton = ({ text }) => {
    return (
        <button className={styles.hallowButton}>{text}</button>
    )
}

export default HallowButton