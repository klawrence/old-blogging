import React from 'react'
import Post from 'posts/Post'

export function Application(_props) {
  return <div id='application'>
    <h1 className='site-name'>Blogging</h1>
    <form>
      <input type='text' name='title' />
      <textarea name='body' />
      <input type='submit' />
    </form>
    <Post id={1} />
  </div>
}


