class BooksController < ApplicationController

	

	def new
		@book = Book.new
	end
	def index
		@books = Book.includes(:photos).all
		@books =	@books.as_json
	end

	
end
