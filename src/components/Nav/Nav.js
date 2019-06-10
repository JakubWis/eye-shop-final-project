import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import './Nav.scss';
import Logo from '../../img/Logo/Logo.png';

class Nav extends Component {
  constructor(){
    super();
  }

  render() {
    const numberCart = <span className="NumberCart">({this.props.cart.length})</span>
    return(
      <nav className="Nav">
        <Link  to="/" className="Logo"><img src={Logo} alt="eyeLogo" className="Logo-img"></img>.EYE</Link>
        <div className="Menu">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink exact to="/faq" activeClassName="active">Faq</NavLink>
          <NavLink exact to="/regulamin" activeClassName="active">Regulamin</NavLink>
          <NavLink exact to="/kontakt" activeClassName="active">Kontakt</NavLink>
          <NavLink exact to="/cart" activeClassName="active-cart" className="Cart">
            <span className="fas fa-shopping-basket"></span>
            { numberCart }
          </NavLink>
        </div>
      </nav>
  )};
}

const mapStateToProps = state => {
  return {
      cart: state.cart
  };
}

export default connect(mapStateToProps)(Nav); 