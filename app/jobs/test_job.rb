class TestJob < ApplicationJob
  queue_as :default
  def perform *guest
    puts Member.all
  end
end