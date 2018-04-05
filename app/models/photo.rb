class Photo < ApplicationRecord
  mount_uploader :image, PhotoUploader


	belongs_to :photoable,polymorphic: true,optional: true

end
