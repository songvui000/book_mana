class BookSerializer < ApplicationSerializer
  attributes :name,:year,:description,:url,:photos,:authors,:category_id,:author_ids
  # def photos
  # 	ActiveModelSerializers::SerializableResource.new(object.photos,root: false)
  # end

  # def authors
  # 	ActiveModelSerializers::SerializableResource.new(object.authors,root: false)
  # end		
  
  def photos
  	object.photos.as_json(methods: :image_url,only: [])
  end

  def authors
  	object.authors.as_json(only:[:email,:user_name],methods: :url_author)
  end

  def url
		book_path(object)
  end


end