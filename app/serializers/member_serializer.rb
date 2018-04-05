class MemberSerializer < ApplicationSerializer
  attributes :first_name,:last_name,:user_name,:email,:slug
  has_many :photos,as: :photoable

end
