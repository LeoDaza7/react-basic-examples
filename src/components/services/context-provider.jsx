import React, { Component } from 'react'
import  ThemeContext, { themes } from '../services/theme-context';


class ContextProvider extends Component {
  constructor(props){

    super(props)

    this.handleToggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.light ? themes.dark : themes.light
      }))
    }

    this.state = {
      theme: themes.light,
      handleToggleTheme: this.handleToggleTheme 
    }
    
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ContextProvider
