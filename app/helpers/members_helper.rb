module MembersHelper
	def current_member
		@current_member ||= Member.find_by_email(cookies[:uid])
	end
end
