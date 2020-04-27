import React, { Component, Fragment } from 'react'
import Columns from './columns'

export default class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      words: [
        {id:0, term:'lol', description:'lol'},
        {id:1, term:'xD', description:'haha'}
      ]
    }
  }
  render() {
    return (
      <Fragment>
        <h1>Fragments</h1>
        <table>
          <tbody>
            <tr>
              <Columns />
            </tr>
          </tbody>
        </table>
        <Glosary items={this.state.words}/>
      </Fragment>
    )
  }
}

function Glosary(props) {
  return (
    <dl>
      {
        props.items.map(item => (
          <Fragment key={item.id}>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </Fragment>
        ))
      }
    </dl>
  )
}

//key is the only attribute that can be passed to Fragment
