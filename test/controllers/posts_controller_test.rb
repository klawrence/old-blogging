require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @post = Post.create! title: 'The title', body: 'The body.'
  end

  test 'get the posts index' do
    get posts_url
    assert_response :success
  end

  test 'fetch a post as json' do
    get post_url(@post, format: :json)
    assert_response :success
    json = JSON.parse response.body, symbolize_names: true

    post_json = json #json[:posts][0]
    assert_equal @post.id, post_json[:id]
    assert_equal 'The title', post_json[:title]
    assert_equal 'The body.', post_json[:body]
  end

end