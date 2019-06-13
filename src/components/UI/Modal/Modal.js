import React from 'react';

import './Modal.scss';

const Modal = (props) => {
    let modal = (props.showModal)?
        <div className="Frame">
            <div className="Overlay" onClick={props.closeModal}></div>
            <div className="Modal">
                <button className="CloseBtn" onClick={props.closeModal}>X</button>
                <span className="Text">Opłata przebiegła <span className="Success">pomyślnie!</span></span>
                <span className="Text">Dziękujemy za wybór naszego sklepu.</span> 
            </div>
        </div>
         :
        null

        
    return (
        <>
            {modal}
        </>
    );
}

export default Modal;