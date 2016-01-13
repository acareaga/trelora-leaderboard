class SliderController < ApplicationController
  def index
    @ratings = Rating.all
    @leaderboard = Leaderboard.show
  end
end
