class NotPermittedException < StandardError
end
module AuthorizationMember
	extend ActiveSupport::Concern
	included do
		rescue_from NotPermittedException,with: ->{render json:{ error: 'Not Peritted'}}
	end

	def authorize! collection
		if collection.is_a? Book
			raise NotPermittedException unless current_v1_member.admin? ||   collection.authors.include?(current_v1_member)
		else
			raise NotPermittedException unless current_v1_member.admin? ||   collection == current_v1_member
		end
	end

end