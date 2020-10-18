import React from 'react'
import {fetchPost} from './api'
import {connect} from '../ReactToRails/connect'

export function Post({post}) {
  return <div className='post'>
    <h2 className='title'>{post.title}</h2>
    <div className='body'>{post.body}</div>
  </div>
}

export default connect(Post, fetchPost)


