# frozen_string_literal: true

class InvitePolicy < ApplicationPolicy
  def index?
    role.can?(:manage_invites)
  end

  def create?
    role.can?(:invite_users) || advanced_rule_allows?
  end

  def deactivate_all?
    role.can?(:manage_invites)
  end

  def destroy?
    owner? || role.can?(:manage_invites)
  end

  def invites_left
    invites_generated = current_user.invites.where('expires_at > ? or created_at > ?', 30.days.ago.to_date, 30.days.ago.to_date).sum(:max_uses)
    return 0 if (MAX_INVITES_IN_PERIOD - invites_generated).negative?

    MAX_INVITES_IN_PERIOD - invites_generated
  end

  private

  def owner?
    record.user_id == current_user&.id
  end

  def advanced_rule_allows?
    (user_is_old_enough? && !user_has_used_max_invites_for_period?) ||
      false
  end

  def user_is_old_enough?
    current_user.created_at && current_user.created_at < 30.days.ago
  end

  MAX_INVITES_IN_PERIOD = 10
  def user_has_used_max_invites_for_period?
    invites_left.zero?
  end
end
