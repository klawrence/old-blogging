import React from 'react'
import {mount} from 'enzyme'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import {Post} from 'posts/Post'


describe('The post component', () => {
  test('shows a blog post', () => {
    const component = mount(<Post />)
    expect(component.find('.title').text()).toBe('React on Rails')
    expect(component.find('.body').text()).toBe('I can use React with Rails.')
  })
})
