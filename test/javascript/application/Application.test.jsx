import React from 'react'
import {mount} from 'enzyme'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import {Application} from 'application/Application'

describe('The application', () => {
  test('shows the first blog post', () => {
    const component = mount(<Application />)

    expect(component.find('.site-name').text()).toBe('Blogging')
    expect(component.find('.title').text()).toBe('React on Rails')
    expect(component.find('.body').text()).toBe('I can use React with Rails.')
  })
})
