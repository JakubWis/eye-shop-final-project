import React from 'react';
import {Link} from 'react-router-dom';

import './CartItem.scss';

const CartItem = (props) => { 
    const shortendDescription = props.item.description.substr(0, 150) + '...'

    let priceNumber;

    (props.item.discount)? 
        priceNumber = props.convertToCash(props.item.price - ((props.item.discount/100) * props.item.price))
        :
        priceNumber = props.convertToCash(props.item.price)

    return (
        <div className="CartItem">
            <Link 
                to={ `/product/${props.item.id}`}
                className="CartLink"
                key={props.item.id}
            >
                <img className="Photo" src={props.item.photoLink} alt="product"/>
                <span className="Size">roz. {props.item.pickedSize}</span>
                <div className="About">
                    <h2 className="Name"> {props.item.name} </h2>
                    <p className="Description"> {shortendDescription}</p>
                </div>
                <span className="Price">
                    {priceNumber}
                </span>
            </Link>
            <div className="SafeZone">
                <button className="Delete" onClick={() => props.deleteCartItem(props.index, props.item.id,props.item.pickedSize)}>Usuń produkt</button>
            </div>
        </div>
    );
}

export default CartItem;