import React, { Component, Fragment } from 'react'
import ContextConsumer from '../services/context-consumer'

class Theme extends Component {
  render() {
    return (
      <ContextConsumer>
        {({ handleToggleTheme }) => (
          <Fragment>
            <h1>Context</h1>
            <button onClick={ handleToggleTheme }>
              Theme
            </button>
          </Fragment>
        )}
      </ContextConsumer>
    )
  }
}

export default Theme
