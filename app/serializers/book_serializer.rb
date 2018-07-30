class BookSerializer < ApplicationSerializer
  attributes :name,:year,:description,:url,:photos,:authors,:category_id,:author_ids
  # def photos
  # 	ActiveModelSerializers::SerializableResource.new(object.photos,root: false)
  # end

  # def authors
  # 	ActiveModelSerializers::SerializableResource.new(object.authors,root: false)
  # end		
  
  def photos
  	object.photos
  end

  def authors
  	object.authors
  end

  def url
		book_path(object)
  end


end