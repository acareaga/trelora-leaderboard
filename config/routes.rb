Rails.application.routes.draw do

  get '/ratings', to: 'ratings#index', as: :ratings
  get '/transacts/:id/ratings', to: 'ratings#show', as: :rating_details
  get '/transacts/:id', to: 'transactions#show', as: :transaction
  get '/members/:id', to:  'members#show', as: :member
  get '/people/:id', to: 'people#show', as: :person
  get '/ratings/leaderboard', to: 'leaderboard#show', as: :leaderboard
end
