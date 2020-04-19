import React from 'react'

class Button extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isOn: true  
    }
  }

  handleClick(){
    console.log('this : ', this)
    this.setState(state => ({
      isOn: !state.isOn
    }))
  }

  render(){
    return(
      <button onClick={ () => this.handleClick() }>
        { this.state.isOn ? 'ON' : 'OFF' }
      </button>
    )
  }

}

export default Button
