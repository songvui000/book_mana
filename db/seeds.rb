# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'

Member.destroy_all
puts "Creat Admin"
member = Member.new
member.first_name = "admin"
member.last_name = "book"
member.user_name = "admin"
member.email = "admin@gmail.com"
member.password = 123456789
member.gender = 1
member.save
puts "Creat User"
(1..20).each do |i|
	member = Member.new
	member.first_name = Faker::Name.name
	member.last_name = Faker::Name.name
	member.user_name = "admin"
	member.email = Faker::Name.name.remove(" ")+"@gmail.com"
	member.password = 123456789
	member.gender = 1
	member.save
end

puts "Create Category"

(1..20).each do |i|
	category = Category.new
	category.name = Faker::Science.scientist
	category.save	
end

puts "Create Book"
(1..100).each do |i|
	book = Book.new
	book.year = 1900 + i
	book.name = Faker::Book.title
	book.description = Faker::Book.publisher
	book.category = i%20
	book.save
end