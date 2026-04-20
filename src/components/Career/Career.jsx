import { useEffect } from 'react';
import styles from './Career.module.scss';
import gsap from 'gsap';
export default function Career(){
    useEffect(() => {
        const toggleCon = gsap.utils.toArray(".toggle-con");

        gsap.to(toggleCon, {
            y: -100,
            duration: 1,
            scrollTrigger: {
                trigger: toggleCon,
                start: "top top",
                scrub: 1,
            },
        });
    }, []);

    return(
        <div className={styles.container}>
            <div className="inner">
                <div className={`${styles.careerTitle} secTitle ani-y`}>
                    <div><strong>Work</strong></div>
                    <div><strong>Career</strong></div>
                </div>
                <div className={styles.careerWrap}>
                    <div className={`${styles.careerList} toggle-con`}>
                        <strong className={`${styles.ani} ani-y`}>3years 5month</strong>
                        <dl className={`${styles.career} ani-y`}>
                            <dt>CHUNJAE EDUCATION</dt>
                            <dd>2024.01 - 2025.01</dd>
                            <dd>Web Publishing</dd>
                            <dd>REACT / VUE / HTML / CSS / JAVASCRIPT</dd>
                        </dl>
                        <dl className={`${styles.career} ani-y`}>
                            <dt>DESIGN PIXEL</dt>
                            <dd>2020.12 - 2023.04</dd>
                            <dd>Web Publishing</dd>
                            <dd>HTML / CSS / JAVASCRIPT</dd>
                        </dl>
                        <div className={`${styles.moreBtn} ani-y`}>
                            <a href="/resume.pdf" target="_blank"><span>View My Resume</span></a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}