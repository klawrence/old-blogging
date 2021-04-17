import React from 'react'
import * as axios from 'axios'

export default class PostEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    const {post} = this.state

    return <form onChange={this.handleChange}
                 onSubmit={this.handleSubmit}>
      <input type='text' name='title' className='title' defaultValue={post.title} />
      <textarea name='body' className='body' defaultValue={post.body} />
      <div className='actions'>
        <input type='submit' className='button' />
      </div>
    </form>
  }

  handleChange(event) {
    const {name, value} = event.target
    const post = {
      ...this.state.post,
      [name]: value
    }
    this.setState({post})
  }

  handleSubmit(event) {
    event.preventDefault()

    const {post} = this.state

    const request = {
      url: '/posts.json',
      method: 'post',
      data: {post},
      headers: {
        'X-CSRF-Token': getCSRFToken(),
      }
    }
    return axios(request)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
  }
}

export function getCSRFToken() {
  const csrfTag = document.querySelector('meta[name=csrf-token]') || {content: 'missing-csrf-token'}
  return csrfTag.content
}



