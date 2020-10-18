import React from 'react'

import {assert_select, display} from '../helpers/ReactHelpers'

import {Post} from 'posts/Post'

describe('The post component', () => {
  const post = {
    id: 1,
    title: 'The title',
    body: 'The body.',
  }

  test('shows a blog post', () => {
    const component = display(<Post post={post}/>)
    assert_select(component, '.title', 'The title')
    assert_select(component, '.body', 'The body.')
  })
})
