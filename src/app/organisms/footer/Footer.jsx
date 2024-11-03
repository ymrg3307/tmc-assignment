import styles from './Footer.module.css'
import Image from 'next/image'
import { Instagram, Linkedin, Twitter, Youtube } from 'react-bootstrap-icons'
import Text from '@/app/atoms/text/Text'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topSection}>
                <div className={styles.compNameLogoWrapper}>
                    <div className={styles.logoContainer}>
                    </div>
                    <Image className={styles.compNameImg} src='/THE MORNING CONTEXT_white.svg' alt='logo' width={78} height={58} />
                </div>
                <div className={styles.socialmediaSection}>
                    <h3 className={styles.followText}>Follow us on</h3>
                    <div className={styles.iconsSection}>
                        <Image src='/fbicon.svg' alt='facebook' width={21} height={21} />
                        <Twitter color='white' size={21} />
                        <Linkedin color='white' size={21} />
                        <Instagram color='white' size={21} />
                        <Youtube color='white' size={21} />
                    </div>
                </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.middleSection}>
                <div className={styles.listsContainer}>
                    <div className={styles.listGroup}>
                        <Text text='Categories' fontSize='18px' fontWeight={700} />
                        <Text text='INTERNET' fontSize='16px' color='#FC876D' fontWeight={500} />
                        <Text text='BUSINESS' fontSize='16px' color='#2CB680' fontWeight={500} />
                        <Text text='CHAOS' fontSize='16px' color='#907CFF' fontWeight={500} />
                        <Text text='NEWSLETTERS' fontSize='16px' color='#ECB731' fontWeight={500} />
                        <Text text='All Stories' fontSize='14px' />
                    </div>
                    <div className={styles.listGroup}>
                        <Text text='Subscription' fontSize='18px' fontWeight={700} />
                        <Text text='All Stories' fontSize='14px' />
                        <Text text='Corporate Plans' fontSize='14px' />
                        <Text text='Student Plans' fontSize='14px' />
                        <Text text='Gifting' fontSize='14px' />
                    </div>
                </div>
                <div className={styles.listsContainer}>
                    <div className={styles.listGroup}>
                        <Text text='Company' fontSize='18px' fontWeight={700} />
                        <Text text='About' fontSize='14px' />
                        <Text text='Leadership' fontSize='14px' />
                        <Text text='Investors' fontSize='14px' />
                        <Text text='Team' fontSize='14px' />
                        <Text text='Editorial code of conduct' fontSize='14px' />
                    </div>
                    <div className={styles.listGroup}>
                        <div>
                            <Text text='The Morning Context Blog - On the record' fontSize='14px' />
                            <Text text='TMC Subscriber App' fontSize='14px' />
                        </div>
                        <div style={{ marginTop: '32px' }}>
                            <Text text='Colloborate' fontSize='14px' />
                            <Text text='Contact Us' fontSize='14px' />
                            <Text text='FAQs' fontSize='14px' />
                        </div>
                    </div>
                </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.bottomSection}>
                <address className={styles.address}>
                    <Text text='©2020 Slowform Pte Limited' fontSize='16px' fontWeight={500} />
                    <Text text='68 Circular Road, #02-01, 049422, Singapore' fontSize='14px' />
                </address>
                <hr className={styles.divider} />
                <div className={styles.tocContainer}>
                    <Text text='Terms of service' fontSize='16px' fontWeight={500} textDecoration='underline'/>
                    <Text text='Privacy policy' fontSize='16px' fontWeight={500} textDecoration='underline'/>
                </div>
            </div>
        </footer>
    )
}

export default Footer