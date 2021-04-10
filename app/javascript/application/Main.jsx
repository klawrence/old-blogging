import React from 'react'
import Post from 'posts/Post'
import PostEditor from '../posts/PostEditor'

export function Main() {
  return <div id='main'>
      <PostEditor />
      <Post id={1}/>
    </div>
}


