class Book < ApplicationRecord

	extend FriendlyId
  friendly_id :name, use: :slugged
	
  validates :year, numericality: {only_integer: true,less_than_or_equal_to: Date.today.year}


	belongs_to :category
	
  has_many :photos, as: :photoable
  
  has_many :author_books
  has_many :authors, through: :author_books


  accepts_nested_attributes_for :photos
end
