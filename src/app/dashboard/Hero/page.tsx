'use client'
import React from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'
import { BiRightArrowCircle } from 'react-icons/bi'
import AOS from 'aos';
import { useEffect } from 'react'
import 'aos/dist/aos.css';


const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id='hero' className='no-scrollbar'>
      <div className={styles.hero__container} >
        <div className={styles.background_gradient}>
          <Image
            alt=''
            height={645}
            width={645}
            src={"/bg-gradient.png"} />
        </div>

        <div className={styles.hero__left}>
          <Image
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
            className={styles.hero__left__img}
            alt=''
            width={164}
            height={164}
            src={"/lime-img-earth.svg"} />
          <div className={styles.left__text__content}>
            <div className={styles.hero__heading} data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
              <span className={styles.heading}>UI/UX DESIGNER</span>
              <div className={styles.hero__subheading}>
                <div className={styles.hero__left__line} />
                <p className={styles.codingmestro}>Coding Maestro: Crafting Innovation with Passionate Precision!</p>
              </div>
              <div className={styles.div_lm_scroll}>
                <div className={styles.btn_lm}>
                  <div className={styles.btn_border} />
                  <div className={styles.text_lm}>Learn More</div>
                  <div className={styles.arrow}><BiRightArrowCircle size={25} /></div>
                </div>
                <div className={styles.div_scroll} >
                  <div className={styles.scroll}>
                    <div className={styles.egg_shape} />
                    <div className={styles.big_circle} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.hero__btn}>

            </div>
          </div>
        </div>

        {/*div right*/}
        <div className={styles.hero__right} data-aos="fade-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
          <Image
            className="bg-cover overflow-y-auto bg-center"
            alt=''
            width={625}
            height={642}
            src={"/alien-img2.svg"} />
        </div>
      </div>
    </div>
  )
}

export default Hero