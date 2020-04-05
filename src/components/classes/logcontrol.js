import React from 'react'
import LogInButton  from  '../functions/loginButton'
import LogoutButton from '../functions/logoutButton'

class LogControl extends React.Component {

  constructor(props) {
    super(props)
    this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this)
    this.handleLogoutButtonClick = this.handleLogoutButtonClick.bind(this)
    this.state = {
      isLoggedIn: false
    }
  }

  handleLoginButtonClick(){
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogoutButtonClick(){
    this.setState({
      isLoggedIn: false
    })
  }
  
  render() {

    const isLoggedIn_copy = this.state.isLoggedIn
    let button

    if (!isLoggedIn_copy) {
      button = <LogInButton onClick={this.handleLoginButtonClick} />
    } else {
      button = <LogoutButton onClick={ this.handleLogoutButtonClick } />
    }

    return (
      <div>
        { button }
      </div>
    )
  }
}
 
export default LogControl
