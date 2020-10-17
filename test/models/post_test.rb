require 'test_helper'

class PostTest < ActiveSupport::TestCase
  test 'a post has a title and a body' do
    post = Post.create! title: 'The title', body: 'The body.'
    assert_equal 'The title', post.title
    assert_equal 'The body.', post.body
  end
end