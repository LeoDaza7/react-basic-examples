import React, { Fragment, Suspense, lazy } from 'react'
import ContextConsumer from '../services/context-consumer'

const Clock = lazy(()=>import('../classes/clock'))
const Button = lazy(()=>import('../classes/button'))
const LogControl = lazy(()=>import('../classes/logcontrol'))
const Blog = lazy(()=>import('../classes/blog'))
const Form = lazy(()=>import('../classes/form'))
const Thermostat = lazy(()=>import('../classes/thermostat'))
const SingUpDialog = lazy(()=>import('../classes/signUpDialog'))
const Theme = lazy(()=>import('../classes/theme'))

function Layout(props) {
  return (
    <ContextConsumer>
      {({theme})=>(
        <div style={theme}>  
          <Suspense fallback={<Fragment>Loading...</Fragment>}>
            <Clock />
            <Button />
            <LogControl />
            <Blog />
            <Form />
            <Thermostat />
            <SingUpDialog />
            <Theme />
          </Suspense>
        </div>  
      )}   
    </ContextConsumer>
  )
}

export default Layout
