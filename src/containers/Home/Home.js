import React, { Component } from 'react';
import { connect } from 'react-redux';

import SortList from '../../components/SortList/SortList';
import ShoppingList from '../../components/ShoppingList/ShoppingList';
import { sortAz, sortZa, unsort, sortPriceAscending, sortPriceDescending } from '../../store/actions';

import './Home.scss';

class Home extends Component {
  constructor(){
    super();

    this.state = {
      sortListItems: [
        {id: 0, type: 'Nazwa A-Z', clicked: false},
        {id: 1, type: 'Nazwa Z-A', clicked: false},
        {id: 2, type: 'Ceny rosnąco', clicked: false},
        {id: 3, type: 'Ceny malejąco', clicked: false}
      ],
    }
  }

  onClickSortHandler = (key) => {
    let listItems = this.state.sortListItems;

    //dealing with sort
    if( key === 0  && listItems[key].clicked === false) {
      this.props.sortAz(this.props.shoppingItems)
    }
    if( key === 1  && listItems[key].clicked === false) {
      this.props.sortZa(this.props.shoppingItems)
    }
    if( key === 2  && listItems[key].clicked === false) {
      this.props.sortPriceAscending(this.props.shoppingItems)
    }
    if( key === 3  && listItems[key].clicked === false) {
      this.props.sortPriceDescending(this.props.shoppingItems)
    }

    //dealing with highlighting
    if(listItems[key].clicked === true) {
      this.props.unsort(this.props.shoppingItems)
      
      listItems[key].clicked = false
    }
    else {
      for(let i = 0; i < 4 ; i++) {
        listItems[i].clicked = false;
       if(i === key) listItems[i].clicked = true;
      }
    }
    this.setState({ sortListItems: listItems })
  }

  convertToCash = (number) => {
    return `${number.toFixed(2)} zł`;
  } 

  render() {
    return(
      <div className="Home">
        <SortList 
        sortListItems={this.state.sortListItems}
        onClickChangeColor={this.onClickSortHandler}/>
        <ShoppingList 
        shoppingItems={this.props.shoppingItems}
        convertToCash={this.convertToCash}/>
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
      unsort: unsort,
      sortAz: sortAz,
      sortZa: sortZa,
      sortPriceAscending: sortPriceAscending,
      sortPriceDescending: sortPriceDescending,
}

export default connect(mapStateToProps, mapDispatchToPros)(Home);