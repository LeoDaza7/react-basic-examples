import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error
    }
  }

  componentDidCatch(error,errorInfo){
    this.setState({
      errorInfo: errorInfo
    },()=>{
      console.log(this.state.error, this.state.errorInfo)
      console.log('Error did catch!')
    })
  }

  render() {
      if (this.state.hasError) {
        return <h1>Something went wrong!</h1>
      }
      return this.props.children
  }
}

//The granularity of error boundaries is up to you
//Most of the time you’ll want to declare an error boundary component once and use it throughout your application.
//Two components are inside the same error boundary. If one crashes, the error boundary will replace both of them.
//Two componentsare each inside of their own error boundary. So if one crashes, the other is not affected.
