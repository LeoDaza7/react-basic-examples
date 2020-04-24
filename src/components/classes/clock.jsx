import React, { Fragment, Component, lazy } from 'react'
const FormatDate = lazy(()=> import('../functions/format'))

class Clock extends Component {

  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount(){
    this.timerID = setInterval(()=>this.tick(),1000)

  }
  
  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }

  render(){
      return(
        <Fragment>
          <FormatDate date={ this.state.date }/>
        </Fragment>
      )
  }

}

export default Clock
