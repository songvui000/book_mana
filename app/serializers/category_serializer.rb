class CategorySerializer < ApplicationSerializer
  attributes :name, :url, :photo#, :paginate
  has_one :photo, as: :photoable
  has_many :books

  def url
		category_path(object)
  end

  def paginate
    book = object.books.page(@instance_options[:page])
    {
      current_page: book.current_page,
      prev_page:    book.prev_page,
      next_page:    book.next_page,
      total_page:   book.total_pages
    }
  end
end
