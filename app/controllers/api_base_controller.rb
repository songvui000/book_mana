class ApiBaseController < ActionController::API
	include DeviseTokenAuth::Concerns::SetUserByToken
	# skip_before_filter :verify_authenticity_token, :only => :create
	before_action :authenticate_v1_member!
	
	include AuthorizationMember
	private
		def default_serializer_options
		  {root: false}
		end
	
end