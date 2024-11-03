import styles from './BlockSeparator.module.css'

const BlockSeparator = ({ borderConfig, bgImage }) => {

    const borderStyleValue = `${borderConfig.borderWidth ?? '0px'} solid ${borderConfig.borderColor ?? ''}`

    return (
        <div className={styles.blockSeparator} style={{ border: borderStyleValue, backgroundImage: bgImage ?? null }}>
        </div>
    )
}

export default BlockSeparator