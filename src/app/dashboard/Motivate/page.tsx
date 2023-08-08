
'use client'
import React from 'react'
import styles from './Motivate.module.scss'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';



const Motivate = () => {
    const firstText = useRef(null)
    const secondText = useRef(null)
    let xPercent = 0;
    let direction = -1;
    useEffect(() => {
        requestAnimationFrame(animation);
    }, [])

    const animation = () => {
        if(xPercent <= -100) {
            xPercent = 0;
        }
        gsap.set(firstText.current, {xPercent: xPercent})
        gsap.set(secondText.current, {xPercent: xPercent})
        xPercent += 0.1 * direction;
        requestAnimationFrame(animation);
    }
  return (
    <>
    <div className='w-full h-70'>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <p ref={firstText}>. INSPIRE . DESIGN . CODE .</p>
          <p ref={secondText}> &nbsp;INSPIRE . DESIGN . CODE .</p>
        </div>
      </div>

    </div>
    </>
  )
}

export default Motivate