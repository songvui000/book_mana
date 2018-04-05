class Api::V1::MembersController < ApiBaseController
	respond_to :json,:xls
	before_action :authenticate_v1_member!
	before_action :set_member,except:[:index]

	def index
		# authorize! current_v1_member
		respond_with(Member.all)
	
	end

	def show
		authorize! current_v1_member
		render json: @member
	end

	def edit
		authorize! current_v1_member
		render json: @member
	end

	def update
		authorize! current_v1_member
		if @member.update(params_member)
			render json: @member
		else
			render json: {
				errors: @member.errors.full_messages
			}
		end
		
	end

	def destroy
		authorize! current_v1_member
		if @member.destroy
			render json: {
				status: "ok"
			}
		else
			render json: {
				errors: @member.errors
			}
		end
	end

	private 
		def set_member
			@member = Member.friendly.find(params[:id])
		end

		def params_member
			if params[:password].blank?
				params.permit(:first_name,:last_name,:user_name,:gender)
			else
				params.permit(:password,:password_confirmation,:last_name,:first_name,:user_name,:gender)
			end
		end
end