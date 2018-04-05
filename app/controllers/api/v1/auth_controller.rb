class Api::V1::AuthController < DeviseTokenAuth::SessionsController
	skip_before_action :redirect_to_sign_in!
	def create
		unless v1_member_signed_in?
			super do |resource|
			end
		else
			render json: {
				status: "user have signed in"
			}
		end
	end


	def destroy
		super do |resource|
		end
	end
end