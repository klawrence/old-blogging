import React from 'react'
import PostEditor from '../posts/PostEditor'
import PostList from '../posts/PostList'
import {createPost} from '../ReactToRails/api'

export function Main() {
  return <div id='main'>
    <PostEditor onSubmit={createPost}/>
    <PostList />
  </div>
}


