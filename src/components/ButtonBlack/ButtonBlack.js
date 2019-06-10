import React from 'react';

import './ButtonBlack.scss';

const ButtonBlack = (props) => {
    const button = (props.sizePicked !== null)? 
        <button 
        className="BtnBlack"
        onClick={props.clickedHandler}
         >
            {props.text}
        </button> :

        <button 
        className="BtnBlackDisabled"
        onClick={props.clickDisabledButton}
        >
            {props.text}
        </button>

        
    return (
        <>
            {button}
        </>
    );
}

export default ButtonBlack;