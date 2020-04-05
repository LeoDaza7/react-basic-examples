import React from 'react'
import SingUpDialog from './components/classes/signUpDialog'
import Thermostat from './components/classes/thermostat'
import Form from './components/classes/form'
import Blog from './components/classes/blog'
import LogControl from './components/classes/logcontrol'
import Button from './components/classes/button'
import Clock from './components/classes/clock'

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Clock />
      <Clock />
      <Clock />
      <Button />
      <LogControl />
      <Blog />
      <Form />
      <Thermostat />
      <SingUpDialog />
    </div>
  )
}

export default App
