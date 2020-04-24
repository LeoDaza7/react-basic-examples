import React, { Component } from 'react'

class Button extends Component {

  constructor(props){
    super(props)
    this.state = {
      isOn: true  
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log('this : ', this)
    this.setState(state => ({
      isOn: !state.isOn
    }))
  }

  render(){
    return(
      <button onClick={ this.handleClick }>
        { this.state.isOn ? 'ON' : 'OFF' }
      </button>
    )
  }

}

export default Button
