Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show, :update] do
      member do
        post 'follow'
        post 'unfollow'
      end
    end
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index, :show, :create, :update, :destroy] do
      member do
        post 'favorite'
        post 'unfavorite'
      end
    end
    resources :favorites, only: [:index]
    resources :comments, only: [:index, :create, :destroy, :show]
    resources :searches, only: [:index, :create]
    resources :song_listens, only: [:index, :create]
  end
end
