# frozen_string_literal: true

class PopularPolicy < ApplicationPolicy
  def index?
    user_signed_in? && current_user.id == ENV.fetch('AMBASSADOR_ACCOUNT_ID', '-1').to_i
  end
end
