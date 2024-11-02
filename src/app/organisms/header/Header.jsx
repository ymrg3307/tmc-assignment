import { List, Search } from "react-bootstrap-icons"
import Image from 'next/image'
import styles from "./header.module.css"
import Button from "@/app/atoms/button/Button"
const Header = () => {
    return (
        <header className={styles.headerSection}>
            <div className={styles.LeftHeaderContainer}>
                <List size={23} />
                <div className={styles.compNameLogoWrapper}>
                    <div className={styles.logoContainer}>
                    </div>
                    <Image className={styles.compNameImg} src='/THE MORNING CONTEXT.svg' alt='logo' width={59} height={27} />
                </div>
            </div>
            <div className={styles.rightSectionContainer}>
                <Search size={18} className={styles.searchIcon} />
                <Button text='SIGN UP'/>
            </div>
        </header>
    )
}

export default Header