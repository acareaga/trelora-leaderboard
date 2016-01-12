class PeopleController < ApplicationController

  def show
    @person = Person.show(params[:id])
  end
end
