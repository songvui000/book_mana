class Api::V1::BooksController < ApiBaseController
	before_action :authenticate_v1_member!
	before_action :set_book,only: [:show,:update,:destroy,:edit]
	def index
		books = Book.left_joins(:author_books).group(:id)
		if params[:q]
			books = books.where("name iLIKE ?","%#{params[:q]}%")
		end
		books = books.page(params[:page])
		render json: books,each_serializer: BookSerializer,adapter: :json
	end

	def create
		book = Book.new(book_params)
		if book.save
			render json: book,root: "book"
		else
			render json: {
				status: :unprocessable_entity,
				errors: book.errors.full_messages
			}
		end
	end

	def show
		render json: @book
	end

	def edit
		authorize! @book
		render json: @book
	end

	def update
		authorize! @book
		if @book.update(book_params)
			render json: @book
		else
			render json: {
				errors: @book.errors.full_messages
			}
		end
	end

	def destroy
		authorize! @book
		if @book.destroy
    	render json: {status: ok}
	  else
	  	render json: {errors: @book.errors.full_messages}
	  end
	end


	private

		def set_book
			@book = Book.friendly.find(params[:id])
		end

		def book_params
			params.require(:book).permit(:name,:description,:year, {author_ids:[]},:category_id,photos_attributes:[:photoable_type,:photoable_id,:_destroy,:image])
		end

end