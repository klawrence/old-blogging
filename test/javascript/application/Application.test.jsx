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

  test('also shows the first blog post', async () => {
    const component = await mount(<Application />)

    assert_select(component, '.site-name',   'Blogging')
    assert_select(component, '.post .title', 'React on Rails')
    assert_select(component, '.post .body',  'I can use React with Rails.')
  })

})

export function assert_select(component, selector, expectation) {
  const selected = component.find(selector)
  switch(typeof(expectation)) {
    case 'string':
      expect(selected.text()).toEqual(expectation)
      break
    case 'number':
      expect(selected.length).toEqual(expectation)
      break
    default:
      expect(expectation).toEqual('string or number')
      break
  }
}