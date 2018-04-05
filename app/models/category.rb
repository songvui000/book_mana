class Category < ApplicationRecord
	extend FriendlyId
  friendly_id :name, use: :slugged


	validates :name,presence: true,uniqueness: true
	has_many :books
	has_one :photo,as: :photoable,dependent: :destroy
	accepts_nested_attributes_for :photo
end
