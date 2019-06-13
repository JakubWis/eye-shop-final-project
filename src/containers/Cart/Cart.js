import React, { Component } from 'react'
import { connect } from 'react-redux'

import { delteFromCart, buyProducts, clearCart, addToStore } from '../../store/actions'
import Modal from '../../components/UI/Modal/Modal';
import CartList from '../../components/CartList/CartList'
import './Cart.scss'
import { tsImportEqualsDeclaration } from '@babel/types';

class Cart extends Component {
  constructor(props){
    super(props);

    this.state = {
      showModal: false,
      pickedDiscount: null,
      totalBeforeDiscount: null,
      total: 0,
    }
  }

  componentDidMount() {
    this.countTotal()
  }

  countTotal = () => {
    let total = 0
    const discount = this.state.pickedDiscount

    this.props.cart.map(item => {
      return total += item.price
    })
    if(discount !== null) {
      this.setState({totalBeforeDiscount: `(${this.convertToCash(total)})`})
      total -= (total * (discount/100))
    }else{
      this.setState({totalBeforeDiscount: null})
    }

    return this.setState({total: total})
  }

  convertToCash = (number) => {
    return `${number.toFixed(2)} zł`;
  }

  deleteCartItem = (index, itemId, itemSize) => {
    console.log(index)
    console.log(this.props.cart)
    this.props.deleteItemFromCart(index, this.props.cart)
    this.props.addToStore(this.props.shoppingItems, itemId, itemSize)
    this.countTotal()
  }

  buyProductsHandler = (cart, shoppingItems) => {
    //this.props.buyProducts(cart, shoppingItems) send request
    this.props.clearCart(cart)
    this.setState({showModal: true})
    this.setState({total: 0})
    this.setState({totalBeforeDiscount: null})
  }

  closeModalHandler = () => {
    this.setState({ showModal: false })
  }

  checkDiscountCorrectnessHandler = (inputText) => {
    inputText = inputText.toLowerCase()
    let discountValue = null
    this.props.discountCodes.forEach(dCode => {
      if(dCode.name === inputText)
        discountValue = dCode.value
    })
    if(discountValue !== null)
      this.setState({pickedDiscount: discountValue}, () => {this.countTotal()})
    else 
      this.setState({pickedDiscount: null, totalBeforeDiscount: null}, () => {this.countTotal()})
  }

  render() {
    return(
      <div className="Cart">
        <CartList 
        cartItems={this.props.cart}
        convertToCash={this.convertToCash}
        total={this.convertToCash(this.state.total)}
        deleteCartItem={this.deleteCartItem}
        buyProductsHandler={() => this.buyProductsHandler(this.props.cart, this.props.shoppingItems)}
        checkDiscountCorrectness={this.checkDiscountCorrectnessHandler}
        totalBeforeDiscount={this.state.totalBeforeDiscount}/>
        <Modal 
          closeModal={this.closeModalHandler}
          showModal={this.state.showModal}/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      shoppingItems: state.shoppingItems,
      cart: state.cart,
      discountCodes: state.discountCodes,
  };
}

const mapDispatchToPros = {
  deleteItemFromCart: delteFromCart,
  buyProducts: buyProducts,
  clearCart: clearCart,
  addToStore: addToStore,
}

export default connect(mapStateToProps, mapDispatchToPros)(Cart);