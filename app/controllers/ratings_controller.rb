class RatingsController < ApplicationController

  def index
    @ratings = Rating.all
  end
end
