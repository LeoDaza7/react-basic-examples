import React, { Component, Fragment } from 'react'

export default class BuggyComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      error: true
    })
  }
  render() {
    if(this.state.error){
      throw new Error('my error')
    }
    return (
      <Fragment>
        <h1>Error Boundaries</h1>
        <button onClick={this.handleClick}>
          Trigger Error
        </button>
      </Fragment>
    )
  }
}

