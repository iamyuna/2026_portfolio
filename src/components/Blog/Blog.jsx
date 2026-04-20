import styles from './Blog.module.scss';
import blog from '../../data/blog.json';
import gsap from 'gsap';
import { useEffect } from 'react';

export default function Blog(){
    useEffect(() => {
        const items = gsap.utils.toArray(".toggleBlog");

        gsap.fromTo(items, {
            y: 30,
            opacity: 0,
            rotate: 15,
            transformOrigin: "left top",
        },
        {
            y: 0,
            opacity: 1,
            rotate: 0,
            ease: "none",
            stagger: 0.3,
            scrollTrigger: {
                trigger: items,
                start:  "top 80%",
                end: "top 40%",
                scrub: 1,
            },
        });
    },[]);
    return(
        <div className={styles.container}>
            <div className="inner">
                <div className={`${styles.blogTitle} secTitle ani-y`}>
                    <div><strong>My Study</strong></div>
                    <div><strong>Records</strong></div>
                </div>
                <ul className={styles.blogList}>
                    {blog.map(item => (
                        <li key={item.id} className="toggleBlog">
                            <div className={styles.text}>
                                <span>0{item.id}</span>
                                <p>{item.title}</p>
                            </div>
                            <div className={styles.thumb}>
                                <a href={item.link}>
                                    <img src={item.img} alt="" />
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className={`${styles.moreBtn} ani-y`}>
                    <a href="">View More Blogs</a>
                </div>
            </div>
        </div>
    );
}