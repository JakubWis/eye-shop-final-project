import React, {Component} from 'react';

class ProfileBox extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        inputValue: '',
      }
    }
    onChangeInputValue = (text) => {
        this.setState({inputValue: text})
    }

    render() {
        let Box;
        (this.props.data.changeToInput)?
        Box = 
            <div className="Box">
                <input 
                className="BoxInput" 
                placeholder={this.props.placeholderText} 
                value={this.state.inputValue}
                onChange={(e) => this.onChangeInputValue(e.target.value)}/>
                <button className="Edit" onClick={() => {
                    this.setState({inputValue: ''})
                    this.props.sendNewOne(this.props.index, this.state.inputValue, this.props.keyName)
                    }
                }>Zatwierdź</button>
            </div>
            
        :
        Box =
            <div className="Box">
                <div className="BoxInfo">{this.props.data.info}</div>
                <button className="Edit" onClick={() => this.props.changeToInputFunction(this.props.index)}>Edytuj</button>
            </div> 
        return (
            <>
                {Box}
            </>
        );
    }
}

export default ProfileBox;