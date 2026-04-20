import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import styles from './Works.module.scss';
import IconArrow from '../../assets/icons/IconArrow';
import projects from '../../data/projects.json';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Works() {
    const sectionRef = useRef(null);
    const innerRef = useRef(null);
    const trackRef = useRef(null);

    useGSAP(() => {
        const section = sectionRef.current;
        const inner = innerRef.current;
        const track = trackRef.current;

        const getScrollAmount = () => track.scrollWidth - inner.offsetWidth;

        const horizontalTween = gsap.to(track, {
            x: () => -getScrollAmount(),
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${getScrollAmount()}`,
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true,
            },
        });
        
        const items = gsap.utils.toArray(".project-item");

        items.forEach(item => {
            gsap.fromTo(item, {
                x: 0
            },{
                x: -200,
                ease: 'none',
                scrollTrigger: {
                    trigger: item,
                    containerAnimation: horizontalTween,
                    start: 'left 100%',
                    end: 'left 20%',
                    scrub: true,
                },
            }
            );
        });
    },
    { scope: sectionRef }
    );

    const images = import.meta.glob('/src/assets/images/*.png', { eager: true });

    const getImage = (name) => {
        return images[`/src/assets/images/${name}.png`]?.default;
    };

    return (
        <div ref={sectionRef} className={styles.container}>
            <div ref={innerRef} className={`inner ${styles.inner}`}>
                <div className={styles.track} ref={trackRef}>
                    <div className={`${styles.workTitle} secTitle ani-y`}>
                        <div className={styles.titleInner}>
                            <div><strong>My</strong></div>
                            <div><strong>Projects <em>({projects.length})</em></strong></div>
                        </div>
                    </div>
                    <ul className={styles.projectList}>
                        {projects.map(project => (
                            <li key={project.id} className={`${styles.project} project-item`}>
                                <a href={project.link} target="_blank">
                                    <img src={getImage(project.img)} alt="" />
                                    <div className={styles.text}>
                                        <div className={styles.skills}>
                                            <ul>
                                                {project.skills.map((skill, i) => (
                                                    <li key={i}>{skill}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className={styles.tit}><strong>{project.title}</strong></div>
                                        <div className={styles.des}><p>{project.des}</p></div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.moreBtn}>
                        <div>
                            <a href="https://www.notion.so/34861c26a855801fb15afa7fe035a62a?source=copy_link" target="_blank">
                                SEE<br/> FULL PROJECTS
                                <IconArrow/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}