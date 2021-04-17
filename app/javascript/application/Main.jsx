import React from 'react'
import Post from 'posts/Post'
import PostEditor from '../posts/PostEditor'
import * as axios from 'axios'

export function Main() {
  return <div id='main'>
      <PostEditor onSubmit={createPost}/>
      <Post id={1}/>
    </div>
}


export function getCSRFToken() {
  const csrfTag = document.querySelector('meta[name=csrf-token]') || {content: 'missing-csrf-token'}
  return csrfTag.content
}

export function createPost(post) {
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


