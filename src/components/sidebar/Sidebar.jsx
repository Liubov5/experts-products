import React from 'react';
import styles from "../../styles/Sidebar.module.css";
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <Link to="/products/guides" >Guides </Link>
      <Link to="/products/webinars">Webinars </Link>
      <Link to="/products/courses">Courses </Link>
    </section>
  )
}

export default Sidebar