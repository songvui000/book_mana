class Api::V1::RegistrationsController < DeviseTokenAuth::RegistrationsController
	skip_before_action :redirect_to_sign_in!

	def create
		super do 
		end
	end

	private
		def sign_up_params
			params.permit(:first_name,:last_name,:user_name,:email,:password)
		end
end