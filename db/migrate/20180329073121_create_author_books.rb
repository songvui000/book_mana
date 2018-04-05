class CreateAuthorBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :author_books, id: false do |t|
    	t.belongs_to :book
    	t.belongs_to :author
      t.timestamps
    end
  end
end
