import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Profile.scss';
import ProfileBox from './ProfileBox/ProfileBox';
import axios from '../../axiosAuthentication';
import axiosDatabase from '../../axiosShoppingItems';
import { fetchUserData, authSucces } from '../../store/actions';

class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
        boxes: [
            {
                info: this.props.userData.address,
                changeToInput: false,
            },

            {
                info: this.props.userData.email,
                changeToInput: false,
            },
            
            {
                info: this.props.userData.name,
                changeToInput: false,
            },
            
            {
                info: this.props.userData.surrname,
                changeToInput: false,
            }, 

            {
                info: '***********',
                changeToInput: false,
            },
            
        ]
    }
  }

  onClickEditHandler = (index) => {
      let newBoxes = this.state.boxes
      newBoxes[index].changeToInput = true
      this.setState({boxes: newBoxes})
  }

  onClickSendNewInfoHandler = (index, newInfoFromInput, keyName) => {
    const userId = localStorage.getItem('loggedUserId')
    let newInfo;
    newInfo = {...this.props.userData}
    newInfo[keyName] = newInfoFromInput
    
    if(index === 1) {
        const newEmail = {
            idToken: localStorage.getItem('userToken'),
            email: newInfoFromInput,
            returnSecureToken: true,
        }
        axios.post('/setAccountInfo?key=AIzaSyDoKttL5-Y6m5DdE10eA3hzvepWO8OIPjk', newEmail)
            .then( res => {
                localStorage.setItem('userToken', res.data.idToken)

                let newState = this.state.boxes
                newState[index].info = newInfo[keyName]
                this.setState({boxes: newState})

                let newBoxes = this.state.boxes
                newBoxes[index].changeToInput = false
                this.setState({boxes: newBoxes})
            })
            .then(() => {
                axiosDatabase.put(`/users/${userId}.json`, newInfo)
                .then(res => {
                    this.props.fetchUserData(newInfo)
                    
                    let newState = this.state.boxes
                    newState[index].info = newInfo[keyName]
                    this.setState({boxes: newState})

                    let newBoxes = this.state.boxes
                    newBoxes[index].changeToInput = false
                    this.setState({boxes: newBoxes})
                })
                .catch(err => console.log(err))
            })
            .catch(err => alert('Proszę wyloguj się i zaloguj się ponowanie by wykonać to czynność'))
    } 
    else if(index === 4){
        const newPassword = {
            idToken: localStorage.getItem('userToken'),
            password: newInfoFromInput,
            returnSecureToken: true,
        }
        axios.post('/setAccountInfo?key=AIzaSyDoKttL5-Y6m5DdE10eA3hzvepWO8OIPjk', newPassword)
            .then( res => {
                localStorage.setItem('userToken', res.data.idToken)

                let newBoxes = this.state.boxes
                newBoxes[index].changeToInput = false
                this.setState({boxes: newBoxes})
            })  
            .catch(err => alert('Proszę wyloguj się i zaloguj się ponowanie by wykonać tą czynność'))
    }
    else {
        axiosDatabase.put(`/users/${userId}.json`, newInfo)
        .then(res => {
            this.props.fetchUserData(newInfo)
            
            let newState = this.state.boxes
            newState[index].info = newInfo[keyName]
            newState[index].changeToInput = false
            this.setState({boxes: newState})
        })
        .catch(err => console.log(err))
    }
  }

  render() {
      const tags = ['adres' , 'email', 'imię', 'nazwisko']
      let info = Object.keys(this.props.userData).map( (key,index) => (
            <div className="Block">
              <div className="Tag">{tags[index]}: </div>
              <ProfileBox 
              index = {index}
              keyName = {key}
              data = {this.state.boxes[index]}
              changeToInputFunction = {this.onClickEditHandler}
              sendNewOne = {this.onClickSendNewInfoHandler}
              placeholderText = {(index > 1)?'Wpisz nowe ' + tags[index] : 'Wpisz nowy ' + tags[index] }
              />
          </div>
          )
        )
    return(
      <div className="Profile">
          <h1><span className="far fa-user-circle"></span>Dane profilowe</h1>
          {info}
          <div className="Block">
              <div className="Tag">HASŁO: </div>
              <ProfileBox 
              index = {4}
              data = {this.state.boxes[4]}
              changeToInputFunction = {this.onClickEditHandler}
              sendNewOne = {this.onClickSendNewInfoHandler}
              placeholderText = {'Nowe hasło (ponad 5 znaków)'}/>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        userData: state.userData,
    };
  }
  
  const mapDispatchToPros = {
    fetchUserData: fetchUserData,
    authSucces: authSucces,
  }

export default connect(mapStateToProps, mapDispatchToPros)(Profile);