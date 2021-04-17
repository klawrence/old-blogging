import React from 'react'
import {Post} from './Post'
import {list} from '../ReactToRails/api'

export default class PostList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: null
    }
  }

  render() {
    const {posts} = this.state
    if(posts === null) return 'Loading…'

    return <ul>
      {
        posts.map(post => <li key={post.id}>
          <Post post={post}/>
        </li>)
      }
    </ul>
  }

  async componentDidMount() {
    const response = await list()
    const posts = response.posts
    this.setState({posts})
  }
}

