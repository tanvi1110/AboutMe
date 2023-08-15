
"use client"
import styles from "./Skills.module.scss"
import Image from 'next/image'
import Head from 'next/head';
import { motion} from "framer-motion"
import React, { useEffect, useRef } from "react";
import hover3d from "../../hover";



const Skill = ({ name, x, y }: { name: any, x: any, y: any }) => {
  return (
    <motion.div
      className={styles["div_skills"]}
      whileHover={{ scale: 1.5, color: "#DEE095" }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}>
      {name}
    </motion.div>
  )
}
const Skills = () => {
  
  const hero = useRef<HTMLDivElement>(null);

  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });

  return (
    <>
      <Head>
        <title>Skills</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Changa:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div id='skills' className=' h-screen ml-24'>
        <div ref={hero}
          className={styles["skills"]}>
          
          <motion.div
          style={{
            transform: hoverHero.transform,
          }}
            className={styles["div_img"] + "w-full"}
            initial= {{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100}}
            viewport={{ once: true }}
          >
            <Image
            style={{
              transform: imageHover.transform,
            }}
              className={styles["center_img"]}
              alt=''
              width={349}
              height={524}
              src={"/bululu.png"}
            />

          </motion.div>

          <Skill name="HTML5, CSS5,JS" x="-24vw" y="-17vw" />
          <Skill name="JSX/TSX" x="-29vw" y="-10vw" />
          <Skill name="REACT/NEXTJS" x="-32vw" y="-3vw" />
          <Skill name="TAILWIND" x="-29vw" y="4vw" />
          <Skill name="SQL" x="-24vw" y="11vw" />
          <Skill name="GRAPHICS" x="-19vw" y="18vw" />
          <Skill name="C++" x="0vw" y="21vw" />
          <Skill name="PYTHON" x="24vw" y="-17vw" />
          <Skill name="JAVA" x="29vw" y="-10vw" />
          <Skill name="DJANGO" x="32vw" y="-3vw" />
          <Skill name="FIREBASE" x="29vw" y="4vw" />
          <Skill name="FIGMA" x="24vw" y="11vw" />
          <Skill name="CANVA" x="19vw" y="18vw" />
        </div>
      </div>
    </>
  )
}

export default Skills