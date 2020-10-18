import React from 'react'
import Post from 'posts/Post'
import {Form} from '../posts/Form'

export function Application() {
  return <div id='application'>
    <div id='header' className='header'>
      <h1 className='site-name'>Blogging</h1>
    </div>

    <div id='main'>
      <Form />
      <Post id={1}/>
    </div>
  </div>
}


