import React, { Component, Fragment } from 'react'
import TemperatureInput from './temperatureInput'
import BoilingVeredict from '../functions/boilingVeredict'

class Thermostat extends Component {

  constructor(props){
    super(props)
    this.state = {
      temperature: '',
      scale: ''
    }
    this.handleCelciusChange = this.handleCelciusChange.bind(this)
    this.handleFarenheitChange = this.handleFarenheitChange.bind(this)
  }

  handleCelciusChange(temperature) {
    this.setState({
      scale: 'c',
      temperature
    })
  }

  handleFarenheitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature
    })
  }


  render() {

    const scale = this.state.scale
    const temperature = this.state.temperature
    const celcius = scale.startsWith('f') ? tryConvert(temperature,toCelcius) : temperature
    const fahrenheit = scale.startsWith('c') ? tryConvert(temperature,toFahrenheit) : temperature

    return (
      <Fragment>
        <h1>Lifting State Up</h1>
        <TemperatureInput 
          scale='c'
          temperature={celcius}
          onTemperatureChange={this.handleCelciusChange}  
        />
        <TemperatureInput 
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={this.handleFarenheitChange}
        />
        <BoilingVeredict celcius={parseFloat(celcius)}/>
      </Fragment>
    )
  }
}

export default Thermostat

function toCelcius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9  
}

function toFahrenheit(celcius) {
  return (celcius * 9 / 5) + 32
}

function tryConvert(temperature,convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''    
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}
