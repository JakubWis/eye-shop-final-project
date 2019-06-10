import React from 'react';

import ShoppingItem from './ShoppingItem/ShoppingItem';

import './ShoppingList.scss';

const ShoppingList = (props) => {

    const shoppingItems = props.shoppingItems.reverse().map(item => (
        <ShoppingItem 
            key={item.id}
            item={item}
            convertToCash={props.convertToCash}
        />
    ))

    return (
        <div className="ShoppingList">
            {shoppingItems}
        </div>
    );
}

export default ShoppingList;