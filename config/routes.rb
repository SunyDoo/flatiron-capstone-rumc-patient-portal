Rails.application.routes.draw do
  resources :testimonials, only: [:show, :create, :index]
  resources :doctors, only: [:show, :index]
  resources :locations, only: [:show, :index]
  resources :appointments
  resources :patients, only: [:show, :create, :index]
  # post "/signup", to: "patients#create"
  # post "/login", to: "sessions#create"
  # get "/auth", to: "patients#show"
  # delete "/logout", to: "sessions#destroy"

  # Defines the root path route ("/")
  # root "articles#index"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
