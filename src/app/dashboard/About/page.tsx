import React from 'react'
import styles from './About.module.scss'
import Image from 'next/image'


const About = () => {
  return (
    <>
      <div className={styles["section"]}>
        <div className={styles["about"]}>
          <div className={styles["left"]}>
            <div className={styles["heading"]}>
              <p>DEVELOPER <span>FROM</span> INDIA</p>
            </div>
            <div className={styles["content_div"]}>
              <div className={styles["content"]}>
                <p>Hola peeps! <span className={styles["tanvi"]}>Tanvi</span> from the land of culture  a multi-talented professional with expertise in <span>web development</span>, UI/UX design, and graphic design. With a passion for creating <span>visually appealing</span> and <span>user-centric</span> digital experiences, I strive to combine technical skills and artistic flair to bring innovative ideas to life.</p>
              </div>
              <div className={styles["btns"]}>
                <div className={styles["resume"]}>
                </div>
                <div className={styles["connect"]}>
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