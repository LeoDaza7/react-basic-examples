import React from 'react'
import SingUpDialog from './components/classes/signUpDialog'
import Thermostat from './components/classes/thermostat'
import Form from './components/classes/form'
import Blog from './components/classes/blog'

function App() {
  return (
    <div className="App">
      <SingUpDialog />
      <Thermostat />
      <Form />
      <Blog />
    </div>
  )
}

export default App;
