import React from 'react'
import ThemeContext from '../services/theme-context'

function ContextConsumer(props){
  return (
    <ThemeContext.Consumer>
      { props.children }
    </ThemeContext.Consumer>
  )
}

export default ContextConsumer
