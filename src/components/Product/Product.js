import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} =props;
    const {name, img , seller, price, ratings } = product
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
               <p className='product-name'>{name}</p>
                <p>price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Rating: {ratings}</p> 
            </div>
           <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
               <p className='btn-text'>Add to cart:</p>
               <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
           </button>


        </div>
    );
};

export default Product;