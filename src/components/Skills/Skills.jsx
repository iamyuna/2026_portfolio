import styles from './Skills.module.scss';
import skills from '../../data/skills.json';
import gsap from 'gsap';
import { useEffect } from 'react';

export default function Skills(){
    useEffect(() => {
        const elements = gsap.utils.toArray(".toggleSkill");

        elements.forEach((el) => {
            gsap.fromTo(el, {
                x: "100vw",
                y: "50%",
                rotate: -15,
                transformOrigin: "right top",
            },
            {
                x: 0,
                y: 0,
                rotate: 0,
                ease: "none",
                scrollTrigger: {
                trigger: el,
                start: "top 150%",
                end: "top 60%",
                scrub: 1,
                },
            });
        });
    }, []);

    return(
        <div className={styles.container}>
            <div className={`inner ${styles.inner}`}>
                <div className={`${styles.skillsTitle} secTitle ani-y`}>
                    <div><strong>My</strong></div>
                    <div><strong>Dev</strong></div>
                    <div><strong>Toolkit</strong></div>
                </div>
                <ul className={styles.skillsList}>
                    {skills.map(skill => (
                        <li key={skill.id} className={`${styles.skill} toggleSkill`}>
                            <strong>
                                {skill.skill.map((item, i) => (
                                    <span key={i}>{item}</span>
                                ))}
                            </strong>
                            <ul>
                                {skill.des.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}