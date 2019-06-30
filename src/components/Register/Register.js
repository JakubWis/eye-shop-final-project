import React, { Component } from 'react';
import { connect } from 'react-redux';

import ButtonBlack from '../UI/ButtonBlack/ButtonBlack';
import './Register.scss';

import axios from '../../axiosAuthentication';
import axiosDatabase from '../../axiosShoppingItems';
import { authSucces, fetchUserData } from  '../../store/actions'; 

class Register extends Component {
    constructor(props){
      super(props);
        
      this.state = {
        allInputesFilled: false,
        name: '',
        password: '',
        surrname: '',
        email: '',
        address: '',
        showError: false,
      }
    }

    onChangeName = async(inputText) => {
        await this.setState({name: inputText})
        await this.checkIfAllInputsAreFilledCorrectly()
      }

      onChangePassword = async(inputText) => {
        await this.setState({password: inputText})
        await this.checkIfAllInputsAreFilledCorrectly()
      }
    
      onChangeSurrname = async(inputText) => {
        await this.setState({surrname: inputText})
        await this.checkIfAllInputsAreFilledCorrectly()
      }
    
      onChangeEmail = async(inputText) => {
        await this.setState({email: inputText})
        await this.checkIfAllInputsAreFilledCorrectly()
        if(this.state.showError)
            this.setState({showError: false})    
      }
    
      onChangeAddress = async(inputText) => {
        await this.setState({address: inputText})
        await this.checkIfAllInputsAreFilledCorrectly()
      }

    checkIfAllInputsAreFilledCorrectly = () => {
        if(this.state.name !== '' && 
        this.state.password !== '' &&
        this.state.password.length >= 6 &&  
        this.state.surrname !== '' &&
        this.state.email !== '' &&
        this.state.email.includes('@') &&
        this.state.email.includes('.') &&
        this.state.address !== '')
            this.setState({allInputesFilled: true})
          
    }

    registerHandler = (event) => {
        if(this.state.allInputesFilled){
            event.preventDefault()

            const authData = {
                email: this.state.email,
                password: this.state.password,
                returnSecureToken: true
            }
            axios.post('/signupNewUser?key=AIzaSyDoKttL5-Y6m5DdE10eA3hzvepWO8OIPjk', authData)
                .then(res => {
                    this.props.authSucces(res.data.localId)
                    const userInfo = {
                        email: authData.email,
                        name: this.state.name,
                        surrname: this.state.surrname,
                        address: this.state.address
                    }
                    axiosDatabase.put(`/users/${res.data.localId}.json`, userInfo)
                    .then(() => {
                      this.props.fetchUserData(userInfo)
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

      return(
        <div className="Register">
            <h1>Rejestracja</h1>
            <form>
                <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    onChange={(e) => this.onChangeEmail(e.target.value)}
                    value={this.state.email}/>
                <input 
                    type="text"
                    placeholder="Hasło"
                    minLength={6}
                    required
                    onChange={(e) => this.onChangePassword(e.target.value)}
                    value={this.state.password}/>
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
                    type="text" 
                    placeholder="Adres (do odbioru paczki)" 
                    required
                    onChange={(e) => this.onChangeAddress(e.target.value)}
                    value={this.state.address}/>
                
                {(this.state.showError)?<span className="Error">Użytkownik z tym email'em już istnieje</span> : null}
                <ButtonBlack 
                text="Zarejestruj się"
                clickedHandler={(e) => this.registerHandler(e)}
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
  
  export default connect(null, mapDispatchToPros)(Register);