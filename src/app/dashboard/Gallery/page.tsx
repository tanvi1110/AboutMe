'use client'
import React, { useEffect } from 'react'
import styles from './Gallery.module.scss'
import Image from 'next/image'
import { Fade, Slide } from "react-awesome-reveal";
import { AiOutlineDribbble } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BiSolidAward } from "react-icons/bi";
import Head from 'next/head';
import Link from 'next/link';


const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Head>
        <title>Gallery</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Changa:wght@400;500;600;700&family=Allison&family=Baloo+2:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <div id='gallery' className={styles["gallery"]} >

        <div
          data-scroll data-scroll-speed="1" data-scroll-offset='10' data-scroll-direction="horizontal"
          className={styles["heading"]}>
          <div className={styles["gg"]}>
            <p>
              GRAPHICS GALLERY
            </p>
          </div>
          <div className={styles["checkout"]}>
            <div className={styles["button"]}>
              <p className={styles["co_text"]}>check out</p>
            </div>
            <Link href={"https://dribbble.com/devil_546k"}>
              <div className={styles["dribble"]}>
                <AiOutlineDribbble />
              </div>
            </Link>
          </div>
        </div>
        <div className={styles["gallery_container"]}>

          <div className={styles["left_container"]}>
            <div className={styles["img_content"]}>
              <div className={styles["child"]}>
                <Image

                  src={"/graphics/g1-min.jpg"}
                  alt=''
                  height={100}
                  width={100}
                  className={styles["image"]}
                />
              </div>
            </div>
            <div className={styles["img_content"]}>
              <div className={styles["child"]}>
                <Image
                  src={"/graphics/g2-min.jpg"}
                  alt=''
                  height={100}
                  width={100}
                  className={styles["image"]}
                />
              </div>
            </div>
            <div className={styles["img_content"]}>
              <div className={styles["child"]}>
                <Image
                  src={"/graphics/g3-min.png"}
                  alt=''
                  height={600}
                  width={400}
                  className={styles["image"]}
                />
              </div>
            </div>
            <div className={styles["img_content"]}>
              <div className={styles["child"]}>
                <Image
                  src={"/graphics/g4-min.jpg"}
                  alt=''
                  height={600}
                  width={400}
                  className={styles["image"]}
                />
              </div>
            </div>
            <div className={styles["img_content"]}>
              <div className={styles["child"]}>
                <Image
                  src={"/graphics/g5-min.jpg"}
                  alt=''
                  height={600}
                  width={400}
                  className={styles["image"]}
                />
              </div>
            </div>
            <div className={styles["img_content"]}>
              <div className={styles["child"]}>
                <Image
                  src={"/graphics/g6-min.jpg"}
                  alt=''
                  height={600}
                  width={400}
                  className={styles["image"]}
                />
              </div>
            </div>
            <div className={styles["img_content"]}>
              <div className={styles["child"]}>
                <Image
                  src={"/graphics/g7-min.jpg"}
                  alt=''
                  height={600}
                  width={400}
                  className={styles["image"]}
                />
              </div>
            </div>
            <div className={styles["img_content"]}>
              <div className={styles["child"]}>
                <Image
                  src={"/graphics/g8-min.jpg"}
                  alt=''
                  height={600}
                  width={400}
                  className={styles["image"]}
                />
              </div>
            </div>

          </div>
          <div className={styles["right_container"]}>
            <Slide duration={1000} direction='left' triggerOnce>
              <div className={styles["txt_right1"]}>
                <BiSolidAward />
                <p>Understand the user</p>
              </div>
            </Slide>
            <Slide duration={1000} direction='left' triggerOnce>
              <div className={styles["txt_right2"]}>
                <BiSolidAward />
                <p>Design for usability</p>
              </div>
            </Slide>
            <Slide duration={1000} direction='left' triggerOnce>
              <div className={styles["txt_right3"]}>
                <BiSolidAward />
                <p>Use visual hierarchy</p>
              </div>
            </Slide>
            <Slide duration={1000} direction='left' triggerOnce>
              <div className={styles["txt_right4"]}>
                <BiSolidAward />
                <p>Empathy and Creativity</p>
              </div>
            </Slide>
          </div>
        </div>

      </div>
    </>
  )
}

export default Gallery