import React from 'react'
import SideBar from '../functions/sidebar'

class Blog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [
        {id: 0, title: 'Hello World', content: 'welcome to learning react!'},
        {id: 1, title: 'Installation', content: 'you can install react from npm.'}
      ]
    }
  }

  render() {
    return (
    <div>
      <SideBar content={this.state.posts}/>
      <hr />
    </div>
    )
  }

}

export default Blog