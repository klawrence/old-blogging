import React from 'react'
import Post from 'posts/Post'

export function Application(_props) {
  return <div id='application'>
    <h1 className='site-name'>Blogging</h1>
    <Post id={1} />
  </div>
}
