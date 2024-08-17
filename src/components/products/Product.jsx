import React from 'react'
import styles from "../../styles/Guide.module.css"
import { Link } from 'react-router-dom'

const Product = ({title, description, author, linkToProduct, linkToAuthor, price}) => {
  return (
    <div className={styles.guide}>
        <div className={styles.info}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    </div>
  )
}

export default Product