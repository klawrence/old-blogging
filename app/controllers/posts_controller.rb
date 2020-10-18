class PostsController < ApplicationController
  before_action :set_post, only: :show

  def create
    @post = Post.new post_params
    if @post.save
      render :show
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private
  def set_post
    @post = Post.find params[:id]
  end

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
