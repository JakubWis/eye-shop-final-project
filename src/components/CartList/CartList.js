import React from 'react';

import CartItem from './CartItem/CartItem';
import ButtonBlack from '../ButtonBlack/ButtonBlack';

import './CartList.scss';

const CartList = (props) => {

    const cartItems = props.cartItems.map((item, index) => (
        <CartItem 
            key={item.id}
            item={item}
            convertToCash={props.convertToCash}
            deleteCartItem={props.deleteCartItem}
            index={index}
        />
    ))

    return (
        <div className="CartList">
            <h1>Koszyk</h1>
            {cartItems}
            <div className="Summary">
                <input 
                type="text"
                placeholder="kod rabatowy"
                className="Discount"/>
            <span className="Total">RAZEM: {props.total}</span>
            <ButtonBlack 
                text="Zapłać"/>
            </div>
            
        </div>
    );
}

export default CartList;