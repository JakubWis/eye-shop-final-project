import React from 'react';

import './Contact.scss';

const Contact = (props) => {   
    return (
        <div className="Contact">
            <h1>Obsługa zamówień</h1>
            <h2 className="Info"><span className="fas fa-mobile-alt"></span> +48 500 101 282</h2>
            <h2 className="Info"><span className="far fa-envelope"></span> info@eye.com</h2>
            <span className="Hours">pn-pt: 11.00 - 18.00</span>
            <span className="Hours">sob: 11.00 - 18.00</span>
        </div>
    );
}

export default Contact;