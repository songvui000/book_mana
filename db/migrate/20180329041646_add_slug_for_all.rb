class AddSlugForAll < ActiveRecord::Migration[5.1]
	AFFECT = [:books, :members, :categories]
  def change
  	AFFECT.each do |tab|
  		add_column tab,:slug,:string
  		add_index tab,:slug
  	end
  end
end
