class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  include MembersHelper
  include AuthMember
end
