import { useEffect, useState } from 'react';
import styles from './Intro.module.scss';
import Splitting from 'splitting';

export default function Intro(){
    const [show, setShow] = useState(true);
    useEffect(() => {
        Splitting();

        const timer = setTimeout(() => {
            setShow(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    if(!show){
        document.querySelector("body").classList.remove("intro");
    };

    return(
        <div className={styles.container}>
            <div className={`${styles.inner} inner`}>
                <div className={`intro-text font-pixel ${styles.introText}`}>
                    <div className="text text-01" data-splitting>&lt;DESIGN&gt;</div>
                    <div className="text text-02" data-splitting>&lt;/DEVELOPMENT&gt;</div>
                </div>
            </div>
        </div>
    );
}