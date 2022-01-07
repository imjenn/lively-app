import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styles from './Footer.module.css';

const Footer = (props) => {

    return (
        <div className={styles.container}>
            <svg className={styles.bottom_grey} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f3f4f5" fill-opacity="1" d="M0,32L40,48C80,64,160,96,240,138.7C320,181,400,235,480,261.3C560,288,640,288,720,245.3C800,203,880,117,960,106.7C1040,96,1120,160,1200,160C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
            <div className={styles.footer_content}>
                <div className={styles.section_1}>
                    <h1 className={styles.footer_h1}>LIVELY</h1>
                    <p>&copy; 2021 LIVELY</p>
                </div>
                <div className={styles.section_2}>
                    <h2 className={styles.footer_header}>Company</h2>
                    <ul className={styles.footer_list}>
                        <li className={styles.footer_list_item}><a href="">About Us</a></li>
                        <li className={styles.footer_list_item}><a href="">Privacy</a></li>
                        <li className={styles.footer_list_item}><a href="">Technologies</a></li>
                    </ul>
                </div>
                <div className={styles.section_3}>
                    <h2 className={styles.footer_header}>Support</h2>
                    <ul className={styles.footer_list}>
                        <li className={styles.footer_list_item}><a href="/contact">Contact Us</a></li>
                        <li className={styles.footer_list_item}><a href="">Cookies</a></li>
                        <li className={styles.footer_list_item}><a href="/contact">FAQs</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;