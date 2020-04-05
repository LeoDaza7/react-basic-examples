import React from 'react'
import List from './list'

function SideBar(props) {
  return (
    <List content={props.content} />
  )
}

export default SideBar