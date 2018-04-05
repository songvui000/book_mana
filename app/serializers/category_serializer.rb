class CategorySerializer < ApplicationSerializer
  attributes :name,:url,:photo,:paginate
  has_one :photo,as: :photoable
  has_many :books,if: -> {show_book}

  def url
		category_path(object)
  end

  def paginate
    if show_book
      book = object.books.page(@instance_options[:page])
      {
        current_page: book.current_page,
        prev_page:    book.prev_page,
        next_page:    book.next_page,
        total_page:   book.total_pages
      }
    end
  end

  def books
  	object.books.page(@instance_options[:page])
  end

  def show_book
  	@instance_options[:show_book]
  end

  

end
