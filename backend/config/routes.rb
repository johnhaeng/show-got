Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
      namespace :v1 do
        resources :cities, only: [:index, :show]
        resources :restaurants, only: [:index, :show, :update]
        resources :shows, only: [:index, :show, :update]
        resources :users, only: [:create, :update]
      end
    end







end
