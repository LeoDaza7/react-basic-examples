import React, { Component } from 'react'

class FormatDate extends Component {
  render(){
    return(
      <h2>It is { this.props.date.toLocaleTimeString() }.</h2>
    )
  }
}

export default FormatDate
