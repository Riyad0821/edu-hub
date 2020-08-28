import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const totalPrice = cart.reduce((total, subject) => total + subject.courseFee, 0);
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <hr/>
            <p> Total Course: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
        </div>
    );
};

export default Cart;