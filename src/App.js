import React from 'react'
import Layout from './components/functions/layout'
import ContextProvider from './components/services/context-provider'

function App(){
  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  )
}

export default App
