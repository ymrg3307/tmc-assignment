import styles from './text.module.css'
const Text = ({ text, color = 'white', fontSize, fontWeight = 400, textDecoration = '' }) => {
    return (
        <p className={styles.text} style={{ color: color, fontSize: fontSize, fontWeight: fontWeight, textDecoration: textDecoration }}>{text}</p>
    )
}

export default Text