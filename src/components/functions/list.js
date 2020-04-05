import React from 'react'
import ListItem from './listItem'

function List(props) {
  const itemslist = props.content.map((item)=>
    <ListItem
      key={item.id}
      value={item.title}
    />
  )
  return (
    <ul>
     {itemslist}
    </ul>
  )
}

export default List
