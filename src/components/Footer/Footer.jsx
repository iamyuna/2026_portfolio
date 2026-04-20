import { forwardRef } from 'react';
import IconArrow2 from '../../assets/icons/IconArrow2';
import styles from './Footer.module.scss';

const Footer = forwardRef(function Footer(props, ref){

    return(
        <footer ref={ref}>
            <div className={`${styles.inner} inner`}>
                <div className={styles.botContent}>
                    <ul className={styles.infoList}>
                        <li>
                            <p>CONTACT :</p>
                            <a href="tel:01087456413">010 8745 6413</a>
                        </li>
                        <li>
                            <p>EMAIL :</p>
                            <a href="mailto:dbsdk95331@naver.com">dbsdk95331@naver.com</a>
                        </li>
                        <li>
                            <p>NOTION :</p>
                            <a href="/" target="_blank">yunahome</a>
                        </li>
                    </ul>
                    <div className={styles.botText}>
                        <p className={styles.copy}>© 2026. Park Yuna Portfolio, Inc. All Rights Reserved.</p>
                        <div className={styles.viewBtn}>
                            <a href="/resume.pdf" target="_blank">
                                View Resume
                                <IconArrow2/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`font-pixel rollText ${styles.rollText}`}>
                    <p>PARK YUNA *</p>
                </div>
            </div>
        </footer>
    );
});

export default Footer;