class LeaderboardController < ApplicationController

  def show
    @leaderboard = Leaderboard.show
  end
end
