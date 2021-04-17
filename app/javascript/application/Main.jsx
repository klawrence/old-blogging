import React from 'react'
import Post from 'posts/Post'
import PostEditor from '../posts/PostEditor'
import {createPost} from '../ReactToRails/api'

export function Main() {
  return <div id='main'>
      <PostEditor onSubmit={createPost}/>
      <Post id={1}/>
    </div>
}


