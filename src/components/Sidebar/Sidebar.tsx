"use client"

import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { Link } from "react-scroll/modules";
import styles from './Sidebar.module.scss'

type Props = {}

const Sidebar = (props: Props) => {
  return (

    <div className={styles.sidebar__wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar__logo}>
          <h2>TANVI</h2>
        </div>

        <div className={styles.sidebar__list__bottom}>
          <ul className={styles.sidebar__list}>

            <Link className={styles.sidebar__link} to="hero" smooth={true} duration={500}>
              <div className={styles.sidebar__icon}><AiOutlineHome size={15} /></div>
            </Link>
            <Link className={styles.sidebar__link} to="skills" smooth={true} duration={500}>
              <div className={styles.sidebar__icon}><BsPeople size={15} /></div>
            </Link>
            <Link className={styles.sidebar__link} to="projects" smooth={true} duration={500}>
              <div className={styles.sidebar__icon}><FiMail size={15} /></div>
            </Link>
            <Link className={styles.sidebar__link} to="/" smooth={true} duration={500}>
              <div className={styles.sidebar__icon}><TiContacts size={15} /></div>
            </Link>
          </ul>
          <div className={styles.sidebar__bottom}>
            <ul className={styles.sidebar__list}>

              <Link className={styles.sidebar__link} to="hero" smooth={true} duration={500}>
                <div className={styles.sidebar__icon}><AiOutlineHome size={15} /></div>
              </Link>
              <Link className={styles.sidebar__link} to="about" smooth={true} duration={500}>
                <div className={styles.sidebar__icon}><BsPeople size={15} /></div>
              </Link>
              <Link className={styles.sidebar__link} to="/" smooth={true} duration={500}>
                <div className={styles.sidebar__icon}><FiMail size={15} /></div>
              </Link>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar