class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
    	t.integer :photoable_id
    	t.string :photoable_type
      t.timestamps
    end
   	add_index :photos ,[:photoable_id,:photoable_type]
  end
end
