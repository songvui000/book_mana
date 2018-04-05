class MemberSerializer < ApplicationSerializer
  attributes :first_name,:last_name,:user_name,:email,:slug,:gender,:level
  has_many :photos,as: :photoable

end
