import React, { Fragment, Component } from 'react'
import FormatDate from '../functions/format'

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
