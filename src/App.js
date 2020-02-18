import React, { useEffect } from "react";
import gsap from 'gsap';

import "./styles/App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import Cases from "./components/cases";
import IntroOverlay from "./components/introOverlay";

function App() {

  useEffect(() => {
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    //prevent flashing of page elements
    gsap.to('body', 0, { css: { visibility: 'visible' } })

    //timeline
    const tl = gsap.timeline()

    tl.from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    }).to('.overlay-top', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: .4,
    }).to('.overlay-bottom', 1.6, {
      width:0,
      ease: 'expo.inOut',
      delay:-0.8,
      stagger: {
        amount: 0.4
      }
    }).to('.intro-overlay', 0, {css:{display: 'none'}})
    .from('.case-image img', 1.6, {
      scale:1.4,
      ease: 'expo.inOut',
      delay:-2,
      stagger:{
        amount: .4,
      }

    })

  }, [])


  return (
    <div className='App'>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
