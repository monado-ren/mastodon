# frozen_string_literal: true

class Scheduler::RegistrationCheckerScheduler
  include Sidekiq::Worker

  sidekiq_options unique: :until_executed, retry: 0

  def perform
    return unless max_users_limit

    if max_users_reached? && registrations_open?
      Setting.open_registrations = false
    elsif !max_users_reached? && registrations_closed?
      Setting.open_registrations = true
    end
  end

  private

  def max_users_limit
    Setting.max_users_limit
  end

  def max_users_reached?
    current_users = Rails.cache.fetch('user_count') { User.confirmed.joins(:account).merge(Account.without_suspended).count }

    return true if current_users >= max_users_limit

    false
  end

  def registrations_closed?
    Setting.open_registrations == false
  end

  def registrations_open?
    Setting.open_registrations == true
  end
end
