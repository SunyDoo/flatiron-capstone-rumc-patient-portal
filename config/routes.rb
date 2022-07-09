Rails.application.routes.draw do
  resources :appointments
  resources :testimonials, only: [:show, :create, :index]
  resources :doctors, only: [:show, :index]
  resources :locations, only: [:show, :index]
  resources :patients
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world'
  # Defines the root path route ("/")
  # root "articles#index"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
