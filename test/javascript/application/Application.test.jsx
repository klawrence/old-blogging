import React from 'react'
import {mount} from 'enzyme'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import {Application} from 'application/Application'
import {server} from 'remote/server'

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

  test('shows the first blog post', async () => {
    const component = await mount(<Application />)

    expect(component.find('.site-name').text()).toEqual('Blogging')
    expect(component.find('.post .title').text()).toEqual('React on Rails')
    expect(component.find('.post .body').text()).toEqual('I can use React with Rails.')

    expect(server.send).toBeCalledWith('/posts/1.json')
  })
})
