import React from 'react'
import styles from "../../styles/Header.module.css";
import logo from "../../images/logo.jpg"
import avatar from "../../images/avatar.png"
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
const Header = () => {
  return (
    <section className={styles.header}>
        <div className={styles.logo}>
           <Link to={ROUTES.HOME}><img src={logo} /></Link>  
        </div>
        <div className={styles.input}>
            <input type="search" name="search" placeholder='search ...' autoComplete='off'/>
        </div>
        <div className={styles.info}></div>
        <div className={styles.profile}>
            <img src={avatar}/>
            
        </div>
    </section>
  )
}

export default Header