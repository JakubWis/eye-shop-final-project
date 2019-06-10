import React from "react";
import { Link } from "react-router-dom";

import './Footer.scss';

const Footer = props => {
  return (
      <nav className="Footer">
        <h6>All right reserved</h6>
        <Link to="/">Home</Link>
        <Link to="/faq">Faq</Link>
        <Link to="/regulamin">Regulamin</Link>
        <Link to="/kontakt">Kontakt</Link>
        <Link><span className="fab fa-facebook-f"></span></Link>
        <Link><span className="fab fa-instagram"></span></Link>
      </nav>
  );
}

export default Footer; 