class Member < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable
          # :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User
  
  extend FriendlyId
  friendly_id :user_name, use: :slugged

  enum level:{admin: 1,member: 0}
  enum gender:{male: 1,female: 2}
  validates_presence_of :password, :on => :create
  validates_confirmation_of :password, :allow_blank => true


  has_many :photos,as: :photoable
  has_many :author_books
  has_many :books,through: :author_books



  before_save :create_user_name



  private
  def self.to_xls
    CSV.generate(options) do |csv|
      csv << column_names
      all.each do |student|
        csv << student.attributes.values_at(*column_names)
      end
    end
  end

  def url_author
    member_path(self)
  end

  def create_user_name
  	unless self.user_name.present?
  		self.user_name = self.email.split("@")[0]
  		self.slug = self.user_name
  	end
  end



end