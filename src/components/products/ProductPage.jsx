import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { selectProductById } from '../../features/products/productsSlice';


const ProductPage = () => {
    const {id} = useParams();
    
    const product = useSelector(state => selectProductById(state, id))
    
    return (
        <>
            <Link to={`/products/${product.type}`}>Back</Link>
            <div>
                <h3>{product.title}</h3>
            </div>
        </>
        
    )
}

export default ProductPage