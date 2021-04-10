import React from 'react'

import {assert_select, display} from '../helpers/ReactHelpers'
import PostEditor from 'posts/PostEditor'

describe('The post editor', () => {
  test('displays a form', () => {
    const component = display(<PostEditor />)
    assert_select(component, '.title')
    assert_select(component, '.body')
  })

  test('updates the post details', () => {
    const submit = jest.fn()
    const component = display(<PostEditor onSubmit={submit} />)

    const title = component.find('.title')
    const body = component.find('.body')
    const form = component.find('form')

    title.simulate('change', {target: {name: 'title', value: 'The title'}})
    body.simulate('change',  {target: {name: 'body', value: 'The body'}})
    form.simulate('submit')

    const expected = {
      title: 'The title',
      body: 'The body',
    }
    expect(submit).toBeCalledWith(expected)
  })
})
