import React from 'react'
import Post from 'posts/Post'
import {Form} from '../posts/Form'
import {Header} from './Header'

export function Main() {
  return <div id='main'>
      <Form />
      <Post id={1}/>
    </div>
}


