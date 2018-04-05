class AddColumnAdminToMember < ActiveRecord::Migration[5.1]
  def change
  	add_column :members,:level,:integer,default: 0
  end
end
