import React from 'react';
import {Link} from 'react-router-dom';

import './ShoppingItem.scss';

const ShoppingItem = (props) => {   
    let shoppingItem;
     if(props.item.extra) {
        shoppingItem = (
        <Link 
            exact to={ `/product/${props.item.id}`}
            className={"ShoppingItem" + props.goLeft + props.comeFromRight}
            key={props.item.id}
        >
            <h2 className="Extra">{props.item.extra}</h2>
            <img className="Photo" src={props.item.photoLink} alt="product"/>
            <h4 className="Name">{props.item.name}</h4>
            <span className="Price">{props.convertToCash(props.item.price)}</span>
        </Link>
        )
    } 
    else {
        shoppingItem = (
        <Link 
            exact to={ `/product/${props.item.id}`}
            className={"ShoppingItem" + props.goLeft + props.comeFromRight}
            key={props.item.id}
        >
            <img className="Photo" src={props.item.photoLink} alt="product"/>
            <h4 className="Name">{props.item.name}</h4>
            <span className="Price">{props.convertToCash(props.item.price)}</span>
        </Link>
        )
    }

    return (
        <>
        {shoppingItem}
        </>
    );
}

export default ShoppingItem;