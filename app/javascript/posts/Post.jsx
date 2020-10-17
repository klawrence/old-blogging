import React from 'react'

export function Post({post}) {
  return <div className='post'>
    <h2 className='title'>{post.title}</h2>
    <div className='body'>{post.body}</div>
  </div>
}

export default class ConnectedPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {}
    }
  }

  render() {
    const {post} = this.state
    return <Post post={post} />
  }

  componentDidMount() {
    const post = {
      id: 1,
      title: 'React on Rails',
      body: 'I can use React with Rails.',
    }
    this.setState({post})
  }
}



