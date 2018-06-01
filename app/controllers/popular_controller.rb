class PopularController < ApplicationController
  include Authorization
  layout 'public'

  EXCLUDED_ACCOUNT_IDS = ENV['EXCLUDED_ACCOUNT_IDS'] || [-1]
  def index
    authorize :popular, :index?
    @popular = Status.
                local.
                with_public_visibility.
                joins(:status_stat).
                where('reblogs_count + favourites_count > ?', threshold).
                where(%q(statuses.created_at > NOW() - INTERVAL '7 days')).
                limit(100).
                reverse
    @page = page
  end

  protected

  def threshold
    base = Status.local.with_public_visibility.joins(:status_stat).where('account_id not in (?)', EXCLUDED_ACCOUNT_IDS).where('favourites_count > 1 or reblogs_count > 1').where(%q(statuses.created_at > NOW() - INTERVAL '30 days'))
    favorites = base.average('status_stats.favourites_count') || 0
    reblogs = base.average('status_stats.reblogs_count') || 0
    favorites + reblogs
  end

  def page
    (params[:page].presence || 1).to_i
  end

end
