import React, { Component } from 'react';

import './SortList.scss';

class SortList extends Component {
    constructor(props){
      super(props);
  
      this.state = {
          //only for phones
          isBtnSortClicked: false,
      }
    }

    onClickBtnSortHandler = () => {
        this.setState({isBtnSortClicked: !this.state.isBtnSortClicked})
    }

    checkIfBtnSortIsActive = (sortListJSX, items) => {
        if(this.state.isBtnSortClicked) {
            sortListJSX = 
            <div className="SortListClicked">
                <button 
                  className="BtnSort"
                  onClick={this.onClickBtnSortHandler}>
                    Sort<span class="fas fa-angle-down"></span>
                </button>
                {items}
            </div>
        } else {
            sortListJSX = 
            <div className="SortListUnclicked">
                <button 
                  className="BtnSort"
                  onClick={this.onClickBtnSortHandler}>
                    Sort<span class="fas fa-angle-down"></span>
                </button>
                {items}
            </div>
        }
        return  sortListJSX
    }

    render() {
        const items = this.props.sortListItems.map((sort) => {
                if(sort.clicked) return <button className="SortOption active-sort" key={sort.id} onClick={() => this.props.onClickChangeColor(sort.id)}>{sort.type}</button>
                return <button className="SortOption" key={sort.id} onClick={() => this.props.onClickChangeColor(sort.id)}>{sort.type}</button>
        })

        let sortList

        if (window.innerWidth < 600) {
            sortList = this.checkIfBtnSortIsActive(sortList, items)
        }else {
            sortList =
            <div className="SortList">
                <h2>Sortuj:</h2>
                {items}
            </div>
        }

        return(
            <>
            {sortList}
            </>  
        );
    }
  }

export default SortList;