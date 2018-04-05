class AuthorBook < ApplicationRecord
	belongs_to :author,class_name:"Member",foreign_key: "author_id",optional: true
	belongs_to :book,optional: true
end
