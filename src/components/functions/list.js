import React from 'react'
import ListItem from './listItem'

function List(props) {
  const titlesList = props.content.map((item)=>
    <ListItem
      key={item.id}
      value={item.title}
    />
  )

  const contentsList = props.content.map((item)=>
    <ListItem 
      key={item.id}
      value={item.content}
    />
  )
  return (
    <ul>
      {titlesList}
       <hr /> 
      {contentsList}
    </ul>
  )
}

export default List
