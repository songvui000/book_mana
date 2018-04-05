class Api::V1::CategoriesController < ApiBaseController
	before_action :set_category,except:[:index,:create,:show]
	before_action :set_category_include,only:[:show]
	def index
		categories = Category.all
		render json: categories
	end


	def create
		category = Category.new(category_params)
		if category.save
			render json: category
		else
			render json: {
				status: :unprocessable_entity,
				errors: category.errors.full_messages
			}
		end
	end

	def show
		render json: @category,page: params[:page],show_book: true
	end


	def edit
	end

	def update
		if @category.update_attributes(category_params)
			render json: @category
		else
			render json: {
				errors: @category.errors.full_messages
			}
		end
	end

	def destroy
		@category.destroy
	end


	private
		def category_params
			params.require(:category).permit(:name,photo_attributes:[:photoable_type,:photoable_id,:image])
		end

		def set_category
			@category = Category.friendly.find(params[:id])
		end
		
		def set_category_include
			@category = Category.includes(books: :photos).friendly.find(params[:id])
		end
end
