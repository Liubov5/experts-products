import React from 'react'
import styles from "../../styles/Header.module.css";
import logo from "../../images/logo.jpg"
import avatar from "../../images/avatar.png"
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { useSelector } from 'react-redux';

const Header = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
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
            {currentUser ? <Link to={ROUTES.PROFILE}> <img src={avatar}/></Link> : <> <Link to={ROUTES.LOGIN}>Sign In</Link> <Link to={ROUTES.REGISTER}>Sign Up</Link> </>}
        </div>
    </section>
  )
}

export default Header