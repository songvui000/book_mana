module AuthMember 
	extend ActiveSupport::Concern
	included do
		before_action :redirect_to_sign_in!
		
	end

	def redirect_to_sign_in!
		
		unless current_member && current_member.valid_token?(cookies["access-token"],cookies["client"])
			redirect_to sign_in_members_path(redirect_url: url_for(only_path: false))
		else
			if controller_name == "members" && (action_name == 'sign_up' || action_name =='sign_in')
				redirect_to root_path
			end
		end
	end
end