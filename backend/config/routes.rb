Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
      namespace :v1 do
        resources :cities, only: [:index, :show]
        resources :restaurants, only: [:index, :show, :update]
        resources :shows, only: [:index, :show, :update]
        resources :users, only: [:create, :update]
        post '/login', to: 'auth#create'
        get '/profile', to: 'users#profile'
        get '/current_user', to: 'auth#show'
        resources :designers, only: [:index, :show]


      end
    end







end
