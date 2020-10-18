import React from 'react'
import Post from 'posts/Post'

export function Application(_props) {
  return <div id='application'>
    <div id='header' className='header'>
      <h1 className='site-name'>Blogging</h1>
    </div>

    <div id='main'>
      <form>
        <input type='text' name='title' />
        <textarea name='body' />
        <div className='actions'>
          <input type='submit' className='button' />
        </div>
      </form>
      <Post />
    </div>
  </div>
}


