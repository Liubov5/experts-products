import React from 'react'
import { useSelector } from 'react-redux'
import styles from "../../styles/Guide.module.css"
import { Link, useLocation, useParams } from 'react-router-dom'
import { selectAllProducts, selectProductByType } from '../../features/products/productsSlice'
import Product from './Product'

const Products = () => {
    const {type} = useParams();
    const products = useSelector(state => selectProductByType(state, type));
    
    
    return (
        <section>
            <div className={styles.guides}>
            {
                products.map( product => (
                    <Link key={product.id} style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/product/${product.id}`} >
                        <Product {...product} />
                    </Link> 
                ))
            }
            </div>         
        </section>
    )
}

export default Products