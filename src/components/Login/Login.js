import React, { Component } from 'react'
import { connect } from 'react-redux';

import './Login.scss';
import ButtonBlack from '../UI/ButtonBlack/ButtonBlack';

import axios from '../../axiosAuthentication';
import axiosDatabase from '../../axiosShoppingItems';
import { authSucces, fetchUserData } from  '../../store/actions'; 

class Login extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        allInputesFilled: false,
        email: '',
        password: '',
      }
    }


    
    onChangeEmail = async(inputText) => {
        await this.setState({email: inputText})
        await this.checkIfAllInputsAreFilledCorrectly()
    }

    onChangePassword = async(inputText) => {
        await this.setState({password: inputText})
        await this.checkIfAllInputsAreFilledCorrectly()
    }

    checkIfAllInputsAreFilledCorrectly = () => {
        console.log( 'sprawdzam')
        if(this.state.password !== '' && 
        this.state.password.length >= 6 &&  
        this.state.email !== '' &&
        this.state.email.includes('@') &&
        this.state.email.includes('.'))
            this.setState({allInputesFilled: true})
    }

    loginHandler = (event) => {
        if(this.state.allInputesFilled){
            event.preventDefault()

            const authData = {
                email: this.state.email,
                password: this.state.password,
                returnSecureToken: true
            }
            axios.post('/verifyPassword?key=AIzaSyDoKttL5-Y6m5DdE10eA3hzvepWO8OIPjk', authData)
                .then(res => {
                    this.props.authSucces(res.data.localId, res.data.idToken)
                    axiosDatabase.get(`/users/${res.data.localId}.json`)
                        .then(res => {
                            this.props.fetchUserData(res.data)
                            this.props.history.push('/');
                        })
                        .catch(err => {console.log(err)})
                })
                .catch(err => {
                    this.setState({showError: true})
                    console.log(err)
                })
        }
    }
    
  
    render() {
        let error;
        this.state.showError?
            error=<div className="Error">Nieprawidłowe dane, spróbuj ponownie.</div>
        :
            error=null

      return(
        <div className="Login">
            <h1>Logowanie</h1>
            <form>
                <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    onChange={(e) => this.onChangeEmail(e.target.value)}
                    value={this.state.email}/>
                <input 
                    type="password"
                    placeholder="Hasło"
                    minLength={6}
                    required
                    onChange={(e) => this.onChangePassword(e.target.value)}
                    value={this.state.password}/>
                {error}
                <ButtonBlack 
                text="Zaloguj się"
                clickedHandler={(e) => this.loginHandler(e)}
                />
            </form>
        </div>
      );
    }
  }

  const mapDispatchToPros = {
    authSucces: authSucces,
    fetchUserData: fetchUserData,
  }
  
  export default connect(null, mapDispatchToPros)(Login);