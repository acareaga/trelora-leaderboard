Rails.application.routes.draw do
  resources :ratings, only:[:index]
end
