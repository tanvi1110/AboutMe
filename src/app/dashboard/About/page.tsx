import React from 'react'
import styles from './About.module.scss'
import Image from 'next/image'
import { AiOutlineCloudDownload } from 'react-icons/ai';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles["section"]}>
        <div className={styles["about"]}>
          <div className={styles["dot_img1"]} />
          <div className={styles["dot_img2"]} />
          <div className={styles["bubble4"]} />
          <div className={styles["bubble5"]} />
          <div className={styles["bubble6"]} />
          <div className={styles["left"]}>
            <div className={styles["bubble1"]} />
            <div className={styles["bubble2"]} />
            <div className={styles["bubble3"]} />
            <div className={styles["heading"]}>
              <p>DEVELOPER <span>FROM</span> <br /> INDIA</p>
            </div>
            <div className={styles["content_div"]}>
              <div className={styles["content"]}>
                <p>Hola peeps! <span className={styles["tanvi"]}>Tanvi</span> from the land of culture  a multi-talented professional with expertise in <span>web development</span>, UI/UX design, and graphic design. With a passion for creating <span>visually appealing</span> and <span>user-centric</span> digital experiences, I strive to combine technical skills and artistic flair to bring innovative ideas to life.</p>
              </div>
              <div className={styles["btns"]}>
                <div className={styles["resume"]}>
                  <p>DOWNLOAD RESUME</p>
                  < AiOutlineCloudDownload className={styles["download"]} />
                </div>
                <div className={styles["connect"]}>
                  <p>CONNECT</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["right"]}>
            <Image
              src={"/aboutme/tanvi-img.svg"}
              width={345}
              height={345}
              alt={""}

            />

          </div>
        </div>
      </div>
    </>
  )
}

export default About