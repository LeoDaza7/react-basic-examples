import React from 'react'

function BoilingVeredict (props) {
  if (props.celcius >= 100) {
    return <p>the water would boil.</p>
  } else {
    return <p>the water would not boil.</p>
  }
}

export default BoilingVeredict
