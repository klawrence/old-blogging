import React from 'react'
import {assert_select, display} from '../helpers/ReactHelpers'

import {server} from 'remote/server'
import {Application} from 'application/Application'


describe('The application', () => {
  server.send = jest.fn()

  beforeEach( () => {
    const post = {
      id: 1,
      title: 'React on Rails',
      body: 'I can use React with Rails.',
    }

    server.send.mockReturnValue(post)
  })

  test('also shows the first blog post', async () => {
    const component = await display(<Application/>)
    assert_select(component, '.site-name',   'Blogging')
    assert_select(component, '.post .title', 'React on Rails')
    assert_select(component, '.post .body',  'I can use React with Rails.')

    expect(server.send).toBeCalledWith('/posts/1.json')
  })
})

