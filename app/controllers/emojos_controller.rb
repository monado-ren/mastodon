# frozen_string_literal: true

class EmojosController < ApplicationController
  layout 'public'
  before_action :authenticate_user!

  def index
    @emojos = CustomEmoji.local.order(:shortcode)
  end
end
