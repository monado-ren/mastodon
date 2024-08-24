# frozen_string_literal: true

require 'singleton'
require 'yaml'

class AvatarFrames
  include Singleton

  def initialize
    @conf = YAML.load_file(Rails.root.join('config', 'avatar_frames.yml'))
  end

  def names
    @conf.keys
  end
end
