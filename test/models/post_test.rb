require 'test_helper'

class PostTest < ActiveSupport::TestCase
  test 'post has a title and a body' do
    post = Post.create! title: 'The title', body: 'The body.'
    assert_equal 'The title', post.title
    assert_equal 'The body.', post.body
  end

  test 'trim the title and body' do
    post = Post.create! title: ' The title ', body: ' The body. '
    assert_equal 'The title', post.title
    assert_equal 'The body.', post.body
  end

  test 'validate the title and body' do
    post = Post.create title: '', body: ''
    refute post.valid?

    assert_equal "is too short (minimum is 2 characters)", post.errors[:title][0]
    assert_equal "is too short (minimum is 2 characters)", post.errors[:body][0]
  end
end