import React, { Component } from 'react';
import { connect } from 'react-redux';

import ButtonBlack from '../../components/ButtonBlack/ButtonBlack';
import { addToCart, pickSize } from '../../store/actions';

import './Product.scss';

class Product extends Component {

  constructor(props){
    super(props);

    this.state = {
      item: this.props.shoppingItems.filter(item => item.id == this.props.match.params.id)[0],
      amount: 1,
      sizeBtns: [
        {size: 'S', clicked: false},
        {size: 'M', clicked: false},
        {size: 'L', clicked: false},
        {size: 'XL', clicked: false},
      ],
      youShouldPickSizeWaring: null,
    }
  }

  componentDidMount() {
    console.log(this.props)
    
  }

  convertToCash = (number) => {
    return `${number.toFixed(2)} zł`;
  }

  AddProductToCart = (amount) => {
    console.log( amount )
    for(let i=0; i<amount; i++) {
      this.props.addToCart( this.state.item, this.props.cart )
    }
  }

  clickDisabledButton = () => {
    const waring = <span className="Waring">Proszę wybrać rozmiar :)</span>
    this.setState({youShouldPickSizeWaring: waring})
  }

  AddToAmount = () => {
    let coppyOfAmount = this.state.amount

    //check if this amount is available in store
    if(coppyOfAmount === this.state.item.size[this.state.item.pickedSize]){
      if(coppyOfAmount === 1) {
        const waring = <span className="Waring">Przykro nam, to ostatnia sztuka tego produktu.</span>
        this.setState({youShouldPickSizeWaring: waring})
      }else {
        const waring = <span className="Waring">Przykro nam, nie mamy większej ilości produktu.</span>
        this.setState({youShouldPickSizeWaring: waring})
      }
    }else{
      coppyOfAmount += 1
      if(coppyOfAmount > 50) coppyOfAmount = 50
      this.setState({amount: coppyOfAmount })
    }
  }

  SubtractFromAmount = () => {
    let coppyOfAmount = this.state.amount
    coppyOfAmount -= 1
    if(coppyOfAmount < 1) coppyOfAmount = 1
    this.setState({amount: coppyOfAmount })
  }

  pickSize = (size) => {
    this.setState({amount: 1})

    this.props.pickSize(this.props.match.params.id, size, this.props.shoppingItems)
    
    //dealing with highlight
    let btns = this.state.sizeBtns
    btns.map(btn => {
      btn.clicked=false
      if( btn.size == size)
        btn.clicked=true
    })
    this.setState({ sizeBtns: btns })

    this.setState({youShouldPickSizeWaring: null})
  }

  render() {
    
    let sizeButtons = this.state.sizeBtns.map(btn => {
      if(this.state.item.size[btn.size] === 0) {
        return <button className="BtnDisabled" disabled>{btn.size}</button> 
      }else{
        if(btn.clicked){
          return <button 
          className="BtnClicked"
          onClick={() => this.pickSize(btn.size)}>
            {btn.size}
          </button>
        }
        return <button 
        className="Btn"
        onClick={() => this.pickSize(btn.size)}>
          {btn.size}
        </button>
      }
    })

    return(
      <div className="Product">
        <img src={this.state.item.photoLink} className="Photo" alt="product"/>
        <div className="About">
          <h1 className="Name">{this.state.item.name}</h1>
          <h4 className="Price">{this.convertToCash(this.state.item.price)}</h4>
          <p className="Description">
            { this.state.item.description }
          </p>
          <div className="PickSize">
            <span className="Text">Rozmiar: </span>
            {sizeButtons}
          </div>
          <div className="Amount">
            <button className="Btn" onClick={this.SubtractFromAmount}>-</button>
            <input 
              type="number"
              className="NumberInput"
              value={this.state.amount}
              />
            <button className="Btn" onClick={this.AddToAmount}>+</button>
            <span className="Text">szt.</span>
          </div>
          {this.state.youShouldPickSizeWaring}
          <ButtonBlack 
            text="Dodaj dokoszyka"
            clickedHandler={() => this.AddProductToCart(this.state.amount)}
            clickDisabledButton={this.clickDisabledButton}
            sizePicked={this.state.item.pickedSize}
            />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      shoppingItems: state.shoppingItems,
      cart: state.cart
  };
}

const mapDispatchToPros = {
  addToCart: addToCart,
  pickSize: pickSize,
}

export default connect(mapStateToProps, mapDispatchToPros)(Product);