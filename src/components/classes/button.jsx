import React, { Component, Fragment } from 'react'

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
      <Fragment>
        <h1>Handling Events</h1>
        <button onClick={ this.handleClick }>
          { this.state.isOn ? 'ON' : 'OFF' }
        </button>
      </Fragment>
    )
  }

}

export default Button
