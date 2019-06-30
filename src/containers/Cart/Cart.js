import React, { Component } from 'react'
import { connect } from 'react-redux'

import { deleteFromCart, buyProducts, clearCart, addToStore } from '../../store/actions'
import Modal from '../../components/UI/Modal/Modal';
import CartList from '../../components/CartList/CartList'
import CustomerInfo from '../../components/CustomerInfo/CustomerInfo';
import './Cart.scss';
import axios from '../../axiosShoppingItems';

class Cart extends Component {
  constructor(props){
    super(props);

    this.state = {
      showCustomerInfo: false,
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
      if(item.discount)
        return total += (item.price - ((item.discount/100) * item.price))
      else
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

  deleteCartItem = async (index, itemId, itemSize) => {
    await this.props.deleteItemFromCart(index)
    await this.props.addToStore(itemId, itemSize)
    await this.countTotal()
  }

  buyProductsHandler = () => {
    this.setState({showCustomerInfo: true})
  }

  payForProductHandler = ( cart, name, surr, email, address) => {
    let cartPrepared = []
    cart.forEach(item => {
      cartPrepared.push({ 
        id: item.id,
        name: item.name,
        pickedSize: item.pickedSize,
      })
    })
    const order = {
      totalPrice: this.state.total.toFixed(2),
      cart: cartPrepared,
      customerInfo: {
        name: name,
        surname: surr,
        email: email,
        address: address,
      },
    }
    
    axios.post('/orders.json', order)
      .then(res => {
        cart.map(item => {
          return axios.put(`/shoppingItems/${item.id}/size/${item.pickedSize}.json`, item.size[item.pickedSize])
        })
      })
      .catch(err => console.log(err))

    this.props.clearCart(cart)
    this.setState({showCustomerInfo: false})
    this.setState({total: 0})
    this.setState({totalBeforeDiscount: null})
    this.setState({showModal: true})
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
    let cartContent;
    (this.state.showCustomerInfo)?
      cartContent =
        <CustomerInfo 
          payAction={this.payForProductHandler}
          totalPrice={this.state.total}
          cart={this.props.cart}
          isUserLoggedIn = {this.props.userLoggedIn}
          userData = {this.props.userData}
        />
      :
      cartContent =  
        <CartList 
        cartItems={this.props.cart}
        convertToCash={this.convertToCash}
        total={this.convertToCash(this.state.total)}
        deleteCartItem={this.deleteCartItem}
        buyProductsHandler={this.buyProductsHandler}
        checkDiscountCorrectness={this.checkDiscountCorrectnessHandler}
        totalBeforeDiscount={this.state.totalBeforeDiscount}/>
    return(
      <div className="Cart">
        {cartContent}
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
      userLoggedIn: state.userLoggedIn,
      userData: state.userData,
  };
}

const mapDispatchToPros = {
  deleteItemFromCart: deleteFromCart,
  buyProducts: buyProducts,
  clearCart: clearCart,
  addToStore: addToStore,
}

export default connect(mapStateToProps, mapDispatchToPros)(Cart);