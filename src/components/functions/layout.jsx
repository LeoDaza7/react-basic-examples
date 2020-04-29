import React, { Fragment, Suspense, lazy } from 'react'
import ContextConsumer from '../services/context-consumer'
import ErrorBoundary from '../services/error-boundary'
import Hook from './hook'

const Clock = lazy(()=>import('../classes/clock'))
const Button = lazy(()=>import('../classes/button'))
const LogControl = lazy(()=>import('../classes/logcontrol'))
const Blog = lazy(()=>import('../classes/blog'))
const Form = lazy(()=>import('../classes/form'))
const Thermostat = lazy(()=>import('../classes/thermostat'))
const SingUpDialog = lazy(()=>import('../classes/signUpDialog'))
const Theme = lazy(()=>import('../classes/theme'))
const BuggyComponent = lazy(()=>import('../classes/buggy-component'))
const Table = lazy(()=>import('../classes/table'))

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
            <ErrorBoundary>
              <BuggyComponent />
            </ErrorBoundary>
            <Table />
            <Hook />
          </Suspense>
        </div>  
      )}   
    </ContextConsumer>
  )
}

export default Layout
