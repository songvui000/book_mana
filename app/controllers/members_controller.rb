class MembersController < ApplicationController
	before_action :set_member,only:[:show]
	skip_before_action :redirect_to_sign_in!,only:[:sign_in,:sign_up,:test1]

	def index
		redirect_to root_path	 unless current_member.admin?
	end

	# def new
	# end

	# def edit
	# end

	# def show
	# end

	def sign_in
	end

	def sign_up
	end

	def test1
		respond_to do |format|
			format.html
			format.json{
				render json: {
					category:Category.includes(:photo,books: :photos )

				}
			}
		end
	end
	
	def test2
	end

	private
		def set_member
			@member = Member.friendly.find(params[:id])
		end

end
