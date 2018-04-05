class CategoriesController < ApplicationController


	# before_action :set_category,only:[:edit,:show,:update,:destroy]
	
	# def index
	# 	@categories = Category.all
	# end

	# def new
	# 	@category = Category.new
	# end

	# def create
	# 	@category = Category.new(params_category)
	# 	if @category.save
	# 		redirect_to @category
	# 	else
	# 		render :new
	# 	end
	# end

	# def show
	# 	@books = @category.books
	# end

	# def edit
	# end

	# def update
	# 	@category = Category.update_attributes(params_category)
	# 	if @category.save
	# 		redirect_to @category
	# 	else
	# 		render :edit
	# 	end
	# end

	# def destroy
	# 	@category.destroy!
	# end


	private
		def params_category
			params.require(:category).permit(:name)
		end

		def set_category
			@category = Category.friendly.find(params[:id])
		end
end
