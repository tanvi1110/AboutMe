'use client'
import styles from './Projects.module.scss'
import Head from 'next/head'
import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';


// gsap.registerPlugin(ScrollTrigger);

const Project = () => {

  // const ref = useRef(null);
  // const ScrollingRef = useRef(null);

  // useLayoutEffect(() => {
  //   const element = ref.current;
  //   const scrollingElement = ScrollingRef.current;

  //   const t1 = gsap.timeline();

  //   setTimeout(() => {
  //     t1.to(element, {
  //       scrollTrigger: {
  //         trigger: element,
  //         start: 'top top',
  //         end: 'bottom+=100% top-=100%',
  //         scroller: '.RootLayout', //locomotive-scroll
  //         scrub: 1,
  //         pin: true,
  //         markers: true,
  //       },
  //       ease: 'none',
  //     });

  //     t1.fromTo(
  //       scrollingElement,
  //       {
  //         y: '0',
  //       },
  //       {
  //         y: '-100%',
  //         scrollTrigger: {

  //           trigger: scrollingElement,
  //           start: 'top top',
  //           end: 'bottom top',
  //           scroller: '.App',
  //           scrub: 1,
  //           markers: true,
  //         },
  //       },
  //     );

  //     ScrollTrigger.refresh();
  //   }, 1000);

  //   return () => {

  //   };
  // }, []);

  return (
    <>
      <Head>
        <title>Skills</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Changa:wght@400;500;600;700&family=Allison&display=swap" rel="stylesheet" />
      </Head>
      <div id='projects' className='h-screen ml-24'>
        <div className={styles["section"]}>
          <div
            data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
            className={styles["works"]}
          >WORKS</div>
          <div className={styles["box"]}>

            <div className={styles["container"]}>
              <Image data-scroll
                data-scroll-speed="1"
                data-scroll-direction="vertical"
                className={styles["items"]}
                alt=''
                width={400}
                height={600}
                src={"/projects/img1.jpg"}
              />
              <Image
                data-scroll
                data-scroll-speed="1"
                data-scroll-direction="vertical"
                className={styles["items"]}
                alt=''
                width={400}
                height={600}
                src={"/projects/img2.jpg"}
              />
              <Image
                data-scroll
                data-scroll-speed="1"
                data-scroll-direction="vertical"
                className={styles["items"]}
                alt=''
                width={400}
                height={600}
                src={"/projects/img3.jpg"}
              />
              <Image
                data-scroll
                data-scroll-speed="1"
                data-scroll-direction="vertical"
                className={styles["items"]}
                alt=''
                width={400}
                height={600}
                src={"/projects/img4.jpg"}
              />
              <Image
                data-scroll
                data-scroll-speed="1"
                data-scroll-direction="vertical"
                className={styles["items"]}
                alt=''
                width={400}
                height={600}
                src={"/projects/img3.jpg"}
              />
              <Image
                data-scroll
                data-scroll-speed="1"
                data-scroll-direction="vertical"
                className={styles["items"]}
                alt=''
                width={400}
                height={600}
                src={"/projects/img4.jpg"}
              />
            </div>
            <div className={styles["textline"]}>
              <div className={styles["line"]} />
              <div data-scroll
                data-scroll-speed="-4"
                data-scroll-direction="vertical" 
                className={styles["text"]}>
                <p className={styles["txt"]}>Designs are the way to express ones idea into reality.  Designs are the way to express ones idea into reality. Designs are the way to express ones idea into reality. Designs are the way to express ones idea into reality. Designs are the way to express ones idea into reality. </p> <br/>
                <span className={styles["tt"]}>Tanvi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Project