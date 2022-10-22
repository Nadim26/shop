import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'; 
const Shop = () =>{
    //console.log(fakeData);
    const first10 = fakeData.slice(0,10);
    const [products, ]= useState(first10)
   
    const [cart, setCart] = useState([]);
    //console.log(products);
    const handleAddProduct = (product) =>{
        //console.log('product added', product);
        const newcart = [...cart, product];
        setCart(newcart);
    
    }
    return ( 
<div className='shop-container'>
     <div className='product-container'>
      
       {
        products.map(pd =>
        <Product
        handleAddProduct = {handleAddProduct} 
        product={pd}>
        </Product>
        )
        
       } 
     </div>
     <div className='cart-container'>
            <Cart cart={cart}>

            </Cart>
     </div>
    
</div>
    );
};

export default Shop; 