import React, { Fragment } from 'react'
import SingUpDialog from './components/classes/signUpDialog'
import Thermostat from './components/classes/thermostat'
import Form from './components/classes/form'
import Blog from './components/classes/blog'
import LogControl from './components/classes/logcontrol'
import Button from './components/classes/button'
import Clock from './components/classes/clock'

function App() {
  return (
    <Fragment>
      <h2>State and Lifecycle</h2>
      <Clock />
      <h2>Handling Events</h2>
      <Button />
      <h2>Conditional Rendering</h2>
      <LogControl />
      <h2>Lists and Keys</h2>
      <Blog />
      <h2>Forms</h2>
      <Form />
      <h2>Lifting State Up</h2>
      <Thermostat />
      <h2>Composition</h2>
      <SingUpDialog />
    </Fragment>
  )
}

export default App
