import { forwardRef, useEffect, useRef } from 'react';
import styles from './Story.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Story = forwardRef((props, ref) => {
    const innerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
        const toggleItems = gsap.utils.toArray('.toggle-item');

        toggleItems.forEach((el) => {
            ScrollTrigger.create({
                trigger: el,
                start: 'top 80%',
                toggleClass: 'in-view',
            });
        });
        }, innerRef);

        return () => ctx.revert();
    }, []);

    return(
        <div ref={ref} className={styles.container}>
            <div ref={innerRef} className="inner">
                <div className={`${styles.topText} ani-y`}>
                    <span>Creative &</span>
                    <span>Sensitive...</span>
                </div>
                <div className={styles.storyWrap}>
                    <div className={`${styles.storyImg} toggle-item`}>
                        <span></span>
                    </div>
                    <div className={`${styles.imgText} ani-y`}>
                        <span>Park</span>
                        <span>Yuna</span>
                    </div>
                </div>
                <p className={`${styles.storyText} ani-y`}>
                    These places and items are shaped by a small <br/>
                    group of people working across locations and <br/>
                    disciplines.
                </p>
            </div>
        </div>
    );
});

export default Story;