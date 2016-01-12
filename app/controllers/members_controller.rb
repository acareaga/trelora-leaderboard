class MembersController < ApplicationController

  def show
    @member = Member.show(params[:id])
  end
end
