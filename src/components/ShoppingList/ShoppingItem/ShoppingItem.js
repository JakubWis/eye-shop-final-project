import React from 'react';
import {Link} from 'react-router-dom';

import './ShoppingItem.scss';



const ShoppingItem = (props) => {  
    let shoppingItem;
    if(props.item.size['S'] === 0 && props.item.size['M'] === 0 && props.item.size['L'] === 0 && props.item.size['XL'] === 0 ) {
        shoppingItem = (
            <div className={"ShoppingItem" + props.goLeft + props.comeFromRight}>
                <div className="SoldOut"> <span className="Text">WYPRZEDANE</span> </div>
                <img className="Photo" src={props.item.photoLink} alt="product"/>
                <h4 className="Name">{props.item.name}</h4>
                <span className="Price">{props.convertToCash(props.item.price)}</span>
            </div>
        )
    } else {
        if(props.item.extra !== undefined) {
            if(props.item.discount !== undefined) {
                shoppingItem = (
                    <Link 
                        to={ `/product/${props.item.id}`}
                        className={"ShoppingItem" + props.goLeft + props.comeFromRight}
                        key={props.item.id}
                    >
                        <h2 className="Extra">{props.item.extra}</h2>
                        <img className="Photo" src={props.item.photoLink} alt="product"/>
                        <h4 className="Name">{props.item.name}</h4>
                        <div className="Price">
                            <span >{props.convertToCash(props.item.price - ((props.item.discount/100) * props.item.price))}</span>
                            <span className="BeforeDiscount">({props.convertToCash(props.item.price)})</span>
                        </div>
                        
                    </Link>
                )
            }else{
                shoppingItem = (
                    <Link 
                        to={ `/product/${props.item.id}`}
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
        } 
        else {
            shoppingItem = (
            <Link 
                to={ `/product/${props.item.id}`}
                className={"ShoppingItem" + props.goLeft + props.comeFromRight}
                key={props.item.id}
            >
                <img className="Photo" src={props.item.photoLink} alt="product"/>
                <h4 className="Name">{props.item.name}</h4>
                <span className="Price">{props.convertToCash(props.item.price)}</span>
            </Link>
            )
        }
    }

    return (
        <>
        {shoppingItem}
        </>
    );
}

export default ShoppingItem;