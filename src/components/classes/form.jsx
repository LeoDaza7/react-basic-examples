import React, { Fragment, Component } from 'react'

class Form extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      name: '',
      essay: 'these are the initial words of a pretty great essay...',
      fruit: 'coconut',
      isGoing: true,
      numberOfGuests: 0
     }
     this.handleNameChange = this.handleNameChange.bind(this)
     this.handleNameSubmit = this.handleNameSubmit.bind(this)
     this.handleEssayChange = this.handleEssayChange.bind(this)
     this.handleEssaySubmit = this.handleEssaySubmit.bind(this)
     this.handleSelectChange = this.handleSelectChange.bind(this)
     this.handleSelectSubmit = this.handleSelectSubmit.bind(this)
     this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleNameChange(event){
    this.setState({
      name: event.target.value,
    })
  }

  handleNameSubmit(event) {
    event.preventDefault()
    alert('Hello ' + this.state.name + '!')
  }

  handleEssayChange(event){
    this.setState({
      essay: event.target.value,
    })
  }

  handleEssaySubmit(event) {
    event.preventDefault()
    alert('An essay was submitted: ' + this.state.essay)
  }

  handleSelectChange(event) {
    this.setState({
      fruit : event.target.value
    })
  }

  handleSelectSubmit(event) {
    event.preventDefault()
    alert('You selected the ' + this.state.fruit + ' fruit!')
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.name === 'isGoing' ? target.checked : target.value
    const name = target.name
    
    this.setState({
      [name] : value
    })
  }

  render() { 
    return ( 
      <Fragment>
        <h1>Forms</h1>
        {/* basic form */}
        <form onSubmit={this.handleNameSubmit}>
          <label>
            Name: 
            <input type='text' value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <hr />
        {/* text-area form */}
        <form onSubmit={this.handleEssaySubmit}>
          <label>
            Essay: 
            <textarea value={this.state.essay} onChange={this.handleNameChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <hr />
        {/* select-tag form */}
        <form onSubmit={this.handleSelectSubmit}>
          <label>
            pick your favorite: 
            <select value={this.state.fruit} onChange={this.handleSelectChange}>
              <option value='coconut' >Coconut</option>
              <option value='mango'>Mango</option>
              <option value='apple'>Apple</option>
              <option value='peach'>Peach</option>
            </select>
            <input type='submit' value='Submit'></input>
          </label>
        </form>
        {/* input-tag form */}
        <hr />
        <form>
          <label>
            Is going:
            <input
              name='isGoing'
              type='checkbox'
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Number of guests:
            <input 
              name='numberOfGuests'
              type='number'
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </Fragment>
    )
  }
}
 
export default Form
