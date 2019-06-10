import React from 'react';
import {Link} from 'react-router-dom';

import './CartItem.scss';

const CartItem = (props) => { 
    const shortendDescription = props.item.description.substr(0, 150) + '...'

    return (
        <div className="CartItem">
            <Link 
                exact to={ `/product/${props.item.id}`}
                className="CartLink"
                key={props.item.id}
            >
                <img className="Photo" src={props.item.photoLink} alt="product"/>
                <span className="Size">roz. {props.item.pickedSize}</span>
                <div className="About">
                    <h2 className="Name"> {props.item.name} </h2>
                    <p className="Description"> {shortendDescription}</p>
                </div>
                <span className="Price">{props.convertToCash(props.item.price)}</span>
            </Link>
            <div className="SafeZone">
                <button className="Delete" onClick={() => props.deleteCartItem(props.index)}>Usuń produkt</button>
            </div>
        </div>
    );
}

export default CartItem;