import React from 'react'
import LogInButton  from  '../functions/loginButton'
import LogoutButton from '../functions/logoutButton'
import WarningBanner from '../functions/warningBanner'

class LogControl extends React.Component {

  constructor(props) {
    super(props)
    this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this)
    this.handleLogoutButtonClick = this.handleLogoutButtonClick.bind(this)
    this.state = {
      isLoggedIn: false,
      showWarning: false
    }
  }

  handleLoginButtonClick(){
    this.setState({
      isLoggedIn: true,
      showWarning: false
    })
  }

  handleLogoutButtonClick(){
    this.setState({
      isLoggedIn: false,
      showWarning: true
    })
  }
  
  render() {

    const isLoggedIn_copy = this.state.isLoggedIn

    return (
      <div>
        <WarningBanner warn={ this.state.showWarning }/>
        <h2>The user has logged { isLoggedIn_copy ? 'in' : 'out' }.</h2>
        { isLoggedIn_copy
          ? <LogoutButton onClick={ this.handleLogoutButtonClick } />
          : <LogInButton onClick={ this.handleLoginButtonClick } /> 
        }
      </div>
    )
  }
}
 
export default LogControl
