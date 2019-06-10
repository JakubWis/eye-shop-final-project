import React, { Component } from 'react'
import { connect } from 'react-redux'

import { delteFromCart } from '../../store/actions'
import CartList from '../../components/CartList/CartList'
import './Cart.scss'

class Cart extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }

  countTotal = () => {
    let total = 0
    this.props.cart.map(item => {
      total += item.price
    })
    return total
  }

  convertToCash = (number) => {
    return `${number.toFixed(2)} zł`;
  }

  deleteCartItem = (index) => {
    console.log(index)
    console.log(this.props.cart)
    this.props.deleteItemFromCart(index, this.props.cart)
  }

  render() {
    return(
      <div className="Cart">
        <CartList 
        cartItems={this.props.cart}
        convertToCash={this.convertToCash}
        total={this.convertToCash(this.countTotal())}
        deleteCartItem={this.deleteCartItem}/>
        
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      cart: state.cart
  };
}

const mapDispatchToPros = {
  deleteItemFromCart: delteFromCart,
}

export default connect(mapStateToProps, mapDispatchToPros)(Cart);