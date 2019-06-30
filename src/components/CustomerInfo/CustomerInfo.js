import React, { Component } from 'react'

import './CustomerInfo.scss';
import ButtonBlack from '../UI/ButtonBlack/ButtonBlack';
import { PayPalButton } from "react-paypal-button-v2";

class CustomerInfo extends Component {
  constructor(props){
    super(props);

    this.state = {
      allInputesFilled: false,
      name: '',
      surrname: '',
      email: '',
      address: '',
    }
  }

  componentWillMount() {
    if(this.props.isUserLoggedIn) {
      this.setState({name: this.props.userData.name})
      this.setState({surrname: this.props.userData.surrname})
      this.setState({email: this.props.userData.email})
      this.setState({address: this.props.userData.address})
    }
  }

  componentDidMount() {
    this.checkIfAllInputsAreFilledCorrectly()
  }

  onChangeName = async(inputText) => {
    await this.setState({name: inputText})
    await this.checkIfAllInputsAreFilledCorrectly()
  }

  onChangeSurrname = async(inputText) => {
    await this.setState({surrname: inputText})
    await this.checkIfAllInputsAreFilledCorrectly()
  }

  onChangeEmail = async(inputText) => {
    await this.setState({email: inputText})
    await this.checkIfAllInputsAreFilledCorrectly()
  }

  onChangeAddress = async(inputText) => {
    await this.setState({address: inputText})
    await this.checkIfAllInputsAreFilledCorrectly()
  }

  checkIfAllInputsAreFilledCorrectly = () => {
    if(this.state.name !== '' && 
    this.state.surrname !== '' &&
    this.state.email !== '' &&
    this.state.email.includes('@') &&
    this.state.email.includes('.') &&
    this.state.address !== '')
        this.setState({allInputesFilled: true})
    else {
      if(this.state.allInputesFilled)
      this.setState({allInputesFilled: false})
    }
  }

  convertToCash = (number) => {
    return `${number.toFixed(2)} zł`;
  }

  

  render() {
    const PayPalOptions = {
      clientId: "sb",
      currency: "PLN",
    }

    const PayPalStyle = {
      color: 'white',
    }

    let paymentButton = (this.state.allInputesFilled)?
    <PayPalButton
      amount={this.props.totalPrice.toFixed(2)}
      options={PayPalOptions}
      style={PayPalStyle}
      onSuccess={(details, data) => {
        this.props.payAction(this.props.cart, this.state.name, this.state.surrname, this.state.email, this.state.address)

        // OPTIONAL: Call your server to save the transaction
        return fetch("https://api.sandbox.paypal.com", {
          method: "post",
          body: JSON.stringify({
            orderID: data.orderID,
          }), 
        });
      }}
    />
    :
    <ButtonBlack 
      text="Płacę"/>
            
    return(
      <div className="CustomerInfo">
          <h1>Dane osobowe</h1>
          <form>
              <input 
                type="text"
                placeholder="Imię"
                required
                onChange={(e) => this.onChangeName(e.target.value)}
                value={this.state.name}/>
              <input 
                type="text" 
                placeholder="Nazwisko" 
                required
                onChange={(e) => this.onChangeSurrname(e.target.value)}
                value={this.state.surrname}/>
              <input 
                type="email" 
                placeholder="Email" 
                required
                onChange={(e) => this.onChangeEmail(e.target.value)}
                value={this.state.email}/>
              <input 
                type="text" 
                placeholder="Adres" 
                required
                onChange={(e) => this.onChangeAddress(e.target.value)}
                value={this.state.address}/>


              <h2 className="Total">Do zapłaty: {this.convertToCash(this.props.totalPrice)}</h2>
              {paymentButton}
          </form>
      </div>
    );
  }
}

export default CustomerInfo;