import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function useScrollAni(){
    useEffect(() => {
        const aniY = gsap.utils.toArray(".ani-y");
        aniY.forEach(el => {
            ScrollTrigger.create({
                trigger: el,
                start: "top 80%",
                onEnter: () => el.classList.add("in-view")
            });
        });

        return() => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    },[]);
}