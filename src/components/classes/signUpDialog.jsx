import React, { Component, Fragment } from 'react'
import Dialog from '../functions/dialog'
import WelcomeDialog from '../functions/welcomeDialog'
import SplitPane from '../functions/splitPane'

class SingUpDialog extends Component {

  constructor(props){
    super(props)
    this.state = {
      login: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleInputChange(event){
    this.setState({
      login: event.target.value
    })
  }

  handleSignUp() {
    alert(`welcome aboard, ${this.state.login}!`)
  }

  render() {
    return (
      <Fragment>
        <WelcomeDialog />
        <SplitPane
          left={
            <p>Contacts</p>
          }
          right={
            <p>Chats</p>
          }
        />
        <Dialog
          title='Mars exploration program'
          message='How should we refer to you'
        >
          <input 
            value={this.state.login}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSignUp}>
            Sign me up!
          </button>
        </Dialog>       
      </Fragment>
    )
  }

}

export default SingUpDialog
