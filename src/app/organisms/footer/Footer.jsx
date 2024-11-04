import styles from './Footer.module.css'
import Image from 'next/image'
import { Instagram, Linkedin, Twitter, Youtube } from 'react-bootstrap-icons'
import Text from '@/app/atoms/text/Text'

const Footer = () => {
    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={styles.topSection}>
                <div className={styles.compNameLogoWrapper}>
                    <div className={styles.logoContainer}>
                    </div>
                    <Image className={styles.compNameImg} src='/THE MORNING CONTEXT_white.svg' alt='The Morning Context Logo' width={78} height={58} priority />
                </div>
                <div className={styles.socialmediaSection}>
                    <h3 className={styles.followText}>Follow us on</h3>
                    <div className={styles.iconsSection}>
                        <a href="https://www.facebook.com/Morningcontext/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                            <Image src='/fbicon.svg' alt='Facebook' width={21} height={21} />
                        </a>
                        <a href="https://x.com/MorningContext" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                            <Twitter color='white' size={21} />
                        </a>
                        <a href="https://www.linkedin.com/company/the-morning-context/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                            <Linkedin color='white' size={21} />
                        </a>
                        <a href="https://www.instagram.com/themorningcontext" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                            <Instagram color='white' size={21} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCYAZQvp_LMnL_IAVB8L-rOQ" target="_blank" rel="noopener noreferrer" aria-label="Follow us on YouTube">
                            <Youtube color='white' size={21} />
                        </a>
                    </div>
                </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.middleSection}>
                <nav className={styles.listsContainer} aria-label="Primary footer navigation">
                    <div className={styles.listGroup}>
                        <h4><Text text='Categories' fontSize='18px' fontWeight={700} /></h4>
                        <ul>
                            <li><a href="/internet" className={styles.footerLink}>
                                <Text text='INTERNET' fontSize='16px' color='#FC876D' fontWeight={500} />
                            </a></li>
                            <li><a href="/business" className={styles.footerLink}>
                                <Text text='BUSINESS' fontSize='16px' color='#2CB680' fontWeight={500} />
                            </a></li>
                            <li><a href="/chaos" className={styles.footerLink}>
                                <Text text='CHAOS' fontSize='16px' color='#907CFF' fontWeight={500} />
                            </a></li>
                            <li><a href="/newsletters" className={styles.footerLink}>
                                <Text text='NEWSLETTERS' fontSize='16px' color='#ECB731' fontWeight={500} />
                            </a></li>
                            <li><a href="/stories" className={styles.footerLink}>
                                <Text text='All Stories' fontSize='14px' />
                            </a></li>
                        </ul>
                    </div>
                    <div className={styles.listGroup}>
                        <h4><Text text='Subscription' fontSize='18px' fontWeight={700} /></h4>
                        <ul>
                            <li><a href="/stories" className={styles.footerLink}>
                                <Text text='All Stories' fontSize='14px' />
                            </a></li>
                            <li><a href="/corporate-plans" className={styles.footerLink}>
                                <Text text='Corporate Plans' fontSize='14px' />
                            </a></li>
                            <li><a href="/student-plans" className={styles.footerLink}>
                                <Text text='Student Plans' fontSize='14px' />
                            </a></li>
                            <li><a href="/gifting" className={styles.footerLink}>
                                <Text text='Gifting' fontSize='14px' />
                            </a></li>
                        </ul>
                    </div>
                </nav>
                <nav className={styles.listsContainer} aria-label="Secondary footer navigation">
                    <div className={styles.listGroup}>
                        <h4><Text text='Company' fontSize='18px' fontWeight={700} /></h4>
                        <ul>
                            <li><a href="/about" className={styles.footerLink}>
                                <Text text='About' fontSize='14px' />
                            </a></li>
                            <li><a href="/leadership" className={styles.footerLink}>
                                <Text text='Leadership' fontSize='14px' />
                            </a></li>
                            <li><a href="/investors" className={styles.footerLink}>
                                <Text text='Investors' fontSize='14px' />
                            </a></li>
                            <li><a href="/team" className={styles.footerLink}>
                                <Text text='Team' fontSize='14px' />
                            </a></li>
                            <li><a href="/editorial-code" className={styles.footerLink}>
                                <Text text='Editorial code of conduct' fontSize='14px' />
                            </a></li>
                        </ul>
                    </div>
                    <div className={styles.listGroup}>
                        <ul>
                            <li><a href="/blog" className={styles.footerLink}>
                                <Text text='The Morning Context Blog - On the record' fontSize='14px' />
                            </a></li>
                            <li><a href="/app" className={styles.footerLink}>
                                <Text text='TMC Subscriber App' fontSize='14px' />
                            </a></li>
                        </ul>
                        <div style={{ marginTop: '32px' }}>
                            <ul>
                                <li><a href="/collaborate" className={styles.footerLink}>
                                    <Text text='Colloborate' fontSize='14px' />
                                </a></li>
                                <li><a href="/contact" className={styles.footerLink}>
                                    <Text text='Contact Us' fontSize='14px' />
                                </a></li>
                                <li><a href="/faqs" className={styles.footerLink}>
                                    <Text text='FAQs' fontSize='14px' />
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <hr className={styles.divider} />
            <div className={styles.bottomSection}>
                <address className={styles.address} itemScope itemType="http://schema.org/Organization">
                    <Text text='©2020 Slowform Pte Limited' fontSize='16px' fontWeight={500} />
                    <span itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                        <Text text='68 Circular Road, #02-01, 049422, Singapore' fontSize='14px' />
                    </span>
                </address>
                <hr className={styles.divider} />
                <nav className={styles.tocContainer} aria-label="Legal">
                    <a href="/"><Text text='Terms of service' fontSize='16px' fontWeight={500} textDecoration='underline'/></a>
                    <a href="/"><Text text='Privacy policy' fontSize='16px' fontWeight={500} textDecoration='underline'/></a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer