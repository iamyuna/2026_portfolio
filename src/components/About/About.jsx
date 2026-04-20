import { useEffect } from 'react';
import styles from './About.module.scss';
import Splitting from 'splitting';
export default function About(){
    useEffect(() => {
        Splitting();
    }, []);
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.titWrap}>
                    <div className={styles.topTit}>
                        <div className={`${styles.aboutTitle} secTitle`}>
                            <div><strong data-splitting>WEB PUBLISHER</strong></div>
                        </div>
                        <div className={styles.aboutDes}>
                            <strong>Calm, Clear, Connected</strong>
                            <p>
                                Between design and development <br/>
                                I focus on balance — clarity and flow,<br/>
                                crafting calm yet engaging web experiences.
                            </p>
                        </div>
                    </div>
                    <div className={styles.aboutSubTit}>
                        <div>
                            <strong>Bridging Design</strong>
                            <strong>and Development</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}