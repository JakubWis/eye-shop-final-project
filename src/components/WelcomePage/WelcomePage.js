import React from 'react'

import sketch from '../../img/WelcomePage/enterphoto.jpg'
import ButtonBlack from '../UI/ButtonBlack/ButtonBlack'

import './WelcomePage.scss';

const WelcomePage = (props) => {
    return (
        <div className="WelcomePage">
            <img src={sketch}  className="Photo" alt="Welcome"/>
            <h1 className="Slogan">We design with passion</h1>
            <ButtonBlack 
                text="Wejdź do sklepu"
                clickedHandler={props.onClickEnterPage}/>

        </div>
        
    )
}

export default WelcomePage;