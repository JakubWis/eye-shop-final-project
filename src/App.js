import React, { Component } from 'react';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import './App.scss';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return(
      <div className="App">
        <Nav/>
        <div className="AppContent">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;