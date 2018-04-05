class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
    	t.string :name,null: false,default: ""
    	t.string :description, null: false,default: ""
    	t.belongs_to :category
      t.timestamps
    end
  end
end
