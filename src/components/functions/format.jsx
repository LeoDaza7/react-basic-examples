import React from 'react'

function FormatDate(props){
  return(
    <h2>It is { props.date.toLocaleTimeString() }.</h2>
  )
}

export default FormatDate
