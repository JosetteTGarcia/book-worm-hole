Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  namespace :api do
    resources :genres, only: [:index, :create]
    resources :user_books
  

    resources :books, only: [:index, :show, :create, :update]
  

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    post "/signup", to: "users#create"
    get "/me", to: "users#show"
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end