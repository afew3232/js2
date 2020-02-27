class PostsController < ApplicationController

	def index
		@posts = Post.all.order(id: "DESC")
	end

	def new
		@post = Post.new
	end

	def create
		@post = Post.new(post_params)
		if @post.save
			redirect_to new_post_path
		else
			render 'new'
		end
	end

	def edit
		@post = Post.find(params[:id])
	end

	def update
		@post = Post.find(params[:id])
		if @post.update(post_params)
			redirect_to root_path
		else
			render 'edit'
		end
	end

	def destroy
		@post = Post.find(params[:id])
		@post.delete
		redirect_to root_path
	end

	private
	def post_params
		params.require(:post).permit(:title, :text)
	end

end
