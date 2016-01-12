class RatingsController < ApplicationController

  def index
    @ratings = Rating.all
  end

  def show
    @rating = Rating.show(params[:id])
    @transaction = Transaction.show(params[:id]) #<--- poro validate this is the correct transaction
  end
end
