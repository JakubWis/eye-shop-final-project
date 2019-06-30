import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import './Nav.scss';
import Logo from '../../img/Logo/Logo.png';
import { logout } from '../../store/actions';

class Nav extends Component {

  constructor(props){
    super(props);

    this.state = {
        //only for phones
        isBtnBurgerClicked: false,
    }
  }

  onClickMenuBtnHandler = () => {
    this.setState({isBtnBurgerClicked: !this.state.isBtnBurgerClicked})
  }

  checkIfBtnMenuIsActive = (menuJSX) => {
    if(this.state.isBtnBurgerClicked) {
      if(this.props.userLoggedIn) {
        menuJSX = 
        <div className="Menu">
          <NavLink  to="/" activeClassName="active">Home</NavLink>
          <NavLink  to="/kontakt" activeClassName="active">Kontakt</NavLink>
          <NavLink to="/regulamin" activeClassName="active">Regulamin</NavLink>
          <NavLink to="/faq" activeClassName="active">Faq</NavLink>
          <Link to="/" className="LoginBtn" onClick={this.logoutHandler}>Wyloguj się</Link>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><span className="fab fa-instagram"></span>insta</a>
        </div>
      } else {
        menuJSX = 
        <div className="Menu">
          <NavLink to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/kontakt" activeClassName="active">Kontakt</NavLink>
          <NavLink to="/regulamin" activeClassName="active">Regulamin</NavLink>
          <NavLink to="/faq" activeClassName="active">Faq</NavLink>
          <NavLink to="/login" className="LoginBtn">Zaloguj</NavLink>
          <NavLink to="/register" className="LoginBtn">Zarejestruj się</NavLink>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><span className="fab fa-instagram"></span>insta</a>
        </div>
      }

    }else {
      menuJSX = null
    }
    return menuJSX
  }

  logoutHandler = () => {
    this.props.logout()
    window.location (`/`)
  }

  render() {
    let navigator, menu, overlay;

    if (window.innerWidth < 900) {
      if(this.props.userLoggedIn) {
        navigator = 
        <nav className="NavPhoneActive">
          <div className="ShowAlways">
            <Link  to="/" className="Logo"><img src={Logo} alt="eyeLogo" className="Logo-img"></img>.EYE</Link>
            <div className="LoginPanel">
              <Link to="/profile" className="LoginBtn"><span className="far fa-user-circle"></span>{this.props.userData.email}</Link>
            </div>
            <div className="ShowMore">
              <button 
                className="ShowMenuBtn"
                onClick={this.onClickMenuBtnHandler}>
                  <span className="fas fa-bars"></span>MENU
              </button>
              <NavLink to="/cart" activeClassName="active-cart" className="Cart">
                <span className="fas fa-shopping-basket"></span>
                <span className="NumberCart">({this.props.cart.length})</span>
              </NavLink>
            </div>
          </div>
          {this.checkIfBtnMenuIsActive(menu, overlay)}
        </nav>
      }else {
        navigator = 
        <nav className="NavPhoneActive">
          <div className="ShowAlways">
            <Link  to="/" className="Logo"><img src={Logo} alt="eyeLogo" className="Logo-img"></img>.EYE</Link>
            <div className="ShowMore">
              <button 
                className="ShowMenuBtn"
                onClick={this.onClickMenuBtnHandler}>
                  <span className="fas fa-bars"></span>MENU
              </button>
              <NavLink to="/cart" activeClassName="active-cart" className="Cart">
                <span className="fas fa-shopping-basket"></span>
                <span className="NumberCart">({this.props.cart.length})</span>
              </NavLink>
            </div>
          </div>
          {this.checkIfBtnMenuIsActive(menu, overlay)}
        </nav>
      }      
    }else {
      if(this.props.userLoggedIn){
        navigator = 
        <nav className="Nav">
          <Link  to="/" className="Logo"><img src={Logo} alt="eyeLogo" className="Logo-img"></img>.EYE</Link>
          <div className="RightPart">
            <div className="LoginPanel">
              <Link to="/profile" className="LoginBtn"><span className="far fa-user-circle"></span>{this.props.userData.email}</Link>
              <Link to="/" className="LoginBtn" onClick={this.logoutHandler}>Wyloguj się</Link>
            </div>
            <div className="Menu">
              <NavLink to="/" activeClassName="active">Home</NavLink>
              <NavLink to="/kontakt" activeClassName="active">Kontakt</NavLink>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><span className="fab fa-instagram"></span>insta</a>
              <NavLink to="/cart" activeClassName="active-cart" className="Cart">
                <span className="fas fa-shopping-basket"></span>
                <span className="NumberCart">({this.props.cart.length})</span>
              </NavLink>
            </div>
          </div>
        </nav>
      }else{
        navigator = 
        <nav className="Nav">
          <Link  to="/" className="Logo"><img src={Logo} alt="eyeLogo" className="Logo-img"></img>.EYE</Link>
          <div className="RightPart">
            <div className="LoginPanel">
              <Link to="/login" className="LoginBtn">Zaloguj</Link>
              <Link to="/register" className="LoginBtn">Zarejestruj się</Link>
            </div>
            <div className="Menu">
              <NavLink to="/" activeClassName="active">Home</NavLink>
              <NavLink to="/kontakt" activeClassName="active">Kontakt</NavLink>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><span className="fab fa-instagram"></span>insta</a>
              <NavLink to="/cart" activeClassName="active-cart" className="Cart">
                <span className="fas fa-shopping-basket"></span>
                <span className="NumberCart">({this.props.cart.length})</span>
              </NavLink>
            </div>
          </div>
        </nav>
      }
    }

    return(
      <>
      {navigator}
      </>
  )};
}

const mapStateToProps = state => {
  return {
      cart: state.cart,
      userLoggedIn: state.userLoggedIn,
      userData: state.userData,
  };
}

const mapDispatchToPros = {
  logout: logout,
}

export default connect(mapStateToProps, mapDispatchToPros)(Nav); 