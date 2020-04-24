import React, { Fragment, Suspense, lazy } from 'react'

const Clock = lazy(()=>import('./components/classes/clock'))
const Button = lazy(()=>import('./components/classes/button'))
const LogControl = lazy(()=>import('./components/classes/logcontrol'))
const Blog = lazy(()=>import('./components/classes/blog'))
const Form = lazy(()=>import('./components/classes/form'))
const Thermostat = lazy(()=>import('./components/classes/thermostat'))
const SingUpDialog = lazy(()=>import('./components/classes/signUpDialog'))

function App() {
  return (
    <Fragment>
      <Suspense fallback={<Fragment>Loading...</Fragment>}>
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
      </Suspense>
    </Fragment>
  )
}

export default App
