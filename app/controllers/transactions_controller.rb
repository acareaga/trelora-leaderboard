class TransactionsController < ApplicationController

  def show
    @transaction = Transaction.show(params[:id])
  end
end
