import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
//const total = cart.reduce((total,prd)=> total + prd.price,0);
let total = 0;
for(let i=0;i<cart.length; i++){
    const product = cart[i];
    total = total + product.price;
}  
let shipping  = 12.99;
if (total<=35){
    shipping = 0;
}
else if(total>35){
    shipping = 4.99;
}
const tax = (total/7.00).toFixed(2);

const tp = (total + shipping + Number(tax)).toFixed(2);
const formatNum = num =>{
    const precision = num.toFixed(2);
    return Number(precision);
}
return (
        <div>
            <h4> Order summary</h4>
            <p>Item ordered : {cart.length}</p>
            <p>product price : {formatNum(total)}</p>
            <p><small>shipping cost : {shipping}</small> </p>
            <p><small>VAT: {tax}</small></p>
            <p>Total Price : {tp}</p>

        </div>
    );
};

export default Cart;