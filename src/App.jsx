import { useEffect, useRef, useState } from 'react'
import './styles/global.scss'
import Intro from './components/Intro/Intro'
import Header from './components/Header/Header'
import About from './components/About/About'
import Works from './components/Works/Works'
import Career from './components/Career/Career'
import Skills from './components/Skills/Skills'
import Story from './components/Story/Story'
import Footer from './components/Footer/Footer'
import useScrollAni from './hooks/useScrollAni'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  useScrollAni();
  const pageRef = useRef(null);
  const storyRef = useRef(null);
  const footerRef = useRef(null);
  const spacerRef = useRef(null);

  useGSAP(() => {
    if (spacerRef.current && footerRef.current){
      ScrollTrigger.create({
        trigger: spacerRef.current,
        start: "top 80%",
        toggleClass: {
          targets: footerRef.current,
          className: "in-view",
        },
      });
    }

    if (storyRef.current && pageRef.current){
      ScrollTrigger.create({
        trigger: storyRef.current,
        start: "top 80%",
        toggleClass: {
          targets: pageRef.current,
          className: "in-view",
        },
      });
    }

  });

  return (
    <div ref={pageRef} className="page">
      <div className="main">
        <Header/>
        <Intro/>
        <About/>
        <Works/>
        <Career/>
        <Skills/>
        <Story ref={storyRef}/>
      </div>
      <div ref={spacerRef} className="footer-space"></div>
      <Footer ref={footerRef}/>
    </div>
  )
}

export default App
