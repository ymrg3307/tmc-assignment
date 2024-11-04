import { List, Search } from "react-bootstrap-icons"
import Image from 'next/image'
import Link from 'next/link'
import styles from "./header.module.css"
import Button from "@/app/atoms/button/Button"

const Header = () => {
    return (
        <header className={styles.headerSection} role="banner">
            <nav className={styles.LeftHeaderContainer} aria-label="Main navigation">
                <button
                    aria-label="Open menu"
                    className={styles.menuButton}
                >
                    <List size={23} />
                </button>
                <div className={styles.compNameLogoWrapper}>
                    <div className={styles.logoContainer}>
                    </div>
                    <Link href="/">
                        <Image
                            className={styles.compNameImg}
                            src='/THE MORNING CONTEXT.svg'
                            alt='The Morning Context Logo'
                            width={59}
                            height={27}
                            priority
                        />
                    </Link>
                </div>
            </nav>
            <div className={styles.rightSectionContainer}>
                <button
                    aria-label="Search"
                    className={styles.searchButton}
                >
                    <Search size={18} className={styles.searchIcon} />
                </button>
                <Button
                    text='SIGN UP'
                    aria-label="Sign up for an account"
                />
            </div>
        </header>
    )
}

export default Header