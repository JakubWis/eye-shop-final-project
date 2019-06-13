import React from 'react';

import CartItem from './CartItem/CartItem';
import ButtonBlack from '../UI/ButtonBlack/ButtonBlack';

import './CartList.scss';

const CartList = (props) => {

    const cartItems = props.cartItems.map((item, index) => (
        <CartItem 
            key={index + 'id:' + item.id}
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
                className="Discount"
                onChange={(e) => props.checkDiscountCorrectness(e.target.value)}/>
            <span className="Total">
                <span className="BeforeDiscount">{props.totalBeforeDiscount}</span>
                RAZEM: {props.total} 
            </span>
            <ButtonBlack 
                text="Zapłać"
                clickedHandler={props.buyProductsHandler}
                shouldBeDisabled={(props.cartItems.length === 0)? true: false}/>
            </div>
            
        </div>
    );
}

export default CartList;