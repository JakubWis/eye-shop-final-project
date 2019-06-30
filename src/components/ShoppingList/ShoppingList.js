import React, {Component} from 'react';

import * as Scroll from 'react-scroll';
import ShoppingItem from './ShoppingItem/ShoppingItem';

import './ShoppingList.scss';

class ShoppingList extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            currentPage: 0,
            startSwitching: false,
            wentLeft: false,
            comeFromRight: false,
        }
      }

    shoppingItemsOnDisplay = (page, shoppingItems) => {
        return shoppingItems.slice(8 * page, 8 * page + 8)
    }

    numberButtons = (shoppingItems) => {
        let buttons=[];
        let amountOfNumbers = Math.ceil(shoppingItems.length/8)

        const writeButtonText = (number) =>{
            number +=1
            if(number >= 10)
                return number
            return '0' + number
        }

        for (let i=0; i<amountOfNumbers; i++ ){
            if(this.state.currentPage === i)
            buttons.push(
                <button
                 key={i + 'contorl'}
                 className="ControlBtn active">
                    {writeButtonText(i)}
                </button>
            )
            else
            buttons.push(
                <button
                 key={i + 'contorl'}
                 onClick={() => this.goToPageHandler(i)}
                 className="ControlBtn">
                    {writeButtonText(i)}
                </button>
            )
        }

        return buttons;
    }

    nextPageHandler = (page, shoppingItems) => {
        if(page !== Math.ceil(shoppingItems.length/8) - 1) // -1 because we start from page 0
         this.goToPageHandler(page+1)
    }

    goToPageHandler = (page) => {
        //go left
        this.setState({startSwitching: true})
        setTimeout(() => this.setState({startSwitching: false}), 1000);
        
        //start comming from right
        setTimeout(() => {
            this.setState({currentPage: page})
            this.setState({comeFromRight: true})
            setTimeout(() => {
                this.setState({comeFromRight: false})
                this.setState({startSwitching: false})
            }, 1000);      
        }, 600);
        
        //scroll up
        setTimeout(() => Scroll.animateScroll.scrollTo(25), 400);
    } 

    render() {
        //reverse items array to show them form lattely added
        let shoppingItemsReversed = this.props.shoppingItems
        if( this.props.shoppingItems.length !== 0 ){ // checking if array of shoppingItems is not empty (because of search engine)
            if(!this.props.isSorted){
                if(this.props.shoppingItems[this.props.shoppingItems.length - 1 ].id !== 0) {
                    this.props.shoppingItems.reverse()
                }
            }
        } 
        
        const shoppingItems = shoppingItemsReversed.map(item => (
            <ShoppingItem 
                key={item.id}
                item={item}
                convertToCash={this.props.convertToCash}
                goLeft={this.state.startSwitching? ' goLeft': ''}
                comeFromRight={this.state.comeFromRight? ' comeFromRight' : ''}
            />
        ))
        return(
        <div className="ShoppingList">
            <div className="SearchBlock">
                <input
                    type="text" 
                    placeholder="Szukaj..."
                    className="SearchInput"
                    value={this.props.searchedValue}
                    onChange={(e) => { 
                        this.props.searcheFor(e.target.value)
                        this.setState({currentPage: 0})
                    }}
                />
                <span className="fas fa-search"></span>
            </div>
            {this.shoppingItemsOnDisplay(this.state.currentPage, shoppingItems)}
            <div className="Controls">
                {this.numberButtons(shoppingItems)}
                <button 
                    className="ControlBtn"
                    onClick={() => this.nextPageHandler(this.state.currentPage, shoppingItems)}>
                    <span className="fas fa-arrow-right"></span>
                </button>
            </div>
            
        </div>
        );
    }        
}

export default ShoppingList;