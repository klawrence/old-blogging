import React from 'react'
import {mount} from 'enzyme'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import {Post} from 'posts/Post'


describe('The post component', () => {
  const post = {
    id: 1,
    title: 'The title',
    body: 'The body.',
  }

  test('shows a blog post', () => {
    const component = mount(<Post post={post}/>)
    expect(component.find('.title').text()).toEqual('The title')
    expect(component.find('.body').text()).toEqual('The body.')
  })
})
