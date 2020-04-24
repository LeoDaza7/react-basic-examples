import React from 'react'

function WarningBanner(props) {
  if (!props.warn) {
    return null
    /**Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods. For instance componentDidUpdate will still be called. */
  }
  return (
    <div className="warning">
      <h1 style={{color: 'red'}}>Warning!</h1>
    </div>
  )
}

export default WarningBanner
