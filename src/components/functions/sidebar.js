import React from 'react'
import List from './list'

function SideBar(props) {
  return (
    <List content={props.content} label={'item.title'}/>
  )
}

export default SideBar