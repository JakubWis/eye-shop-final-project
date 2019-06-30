import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import WelcomePage from './components/WelcomePage/WelcomePage';
import './App.scss';
import { fetchShoppingItems, fetchDiscountCodes, fetchUserData } from './store/actions';
import axios from './axiosShoppingItems';
import Spinner from './components/UI/Spinner/Spinner';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      IsItFirstEnterToPage: true,
      dataDownloaded: false,
    }
  }

  componentDidMount() {
    axios.get('/shoppingItems.json')
      .then(res => {
         const shoppingItemsArray = Object.keys(res.data).map(item => res.data[item]) // from object to array
         this.props.fetchShoppingItems(shoppingItemsArray)
      })
      .then( res => {
        axios.get('/discountCodes.json')
          .then(res => {
            const discountArray = Object.keys(res.data).map(item => res.data[item]) // from object to array
            this.props.fetchDiscountCodes(discountArray)
          })   
      })
      .then(res => {
        this.setState({dataDownloaded: true})
      })
      .catch(err => console.log(err))
      
    
  }

  onBtnEnterClickHandler = () => {
    this.setState({IsItFirstEnterToPage: false})
  }

  render() {
    let App;
    if( this.state.IsItFirstEnterToPage )
      if( this.state.dataDownloaded )
        App= <WelcomePage 
          onClickEnterPage={this.onBtnEnterClickHandler}
        />
      else 
        App = <Spinner />
    else 
      App = <div className="App">
      <Nav/>
      <div className="AppContent">
        {this.props.children}
      </div>
      <Footer />
    </div>

    //check if user should be logged in
    const loggedUserId = localStorage.getItem('loggedUserId');
    if(loggedUserId !== null) 
    {
      axios.get(`/users/${loggedUserId}.json`)
      .then(res => {
        this.props.fetchUserData(res.data)
      })
      .catch(err => {console.log(err)})
    }

    return(
      <>
        {App}
      </>
    );
  }
}

const mapDispatchToPros = {
  fetchShoppingItems: fetchShoppingItems,
  fetchDiscountCodes: fetchDiscountCodes,
  fetchUserData: fetchUserData,
}

export default connect(null, mapDispatchToPros)(App);