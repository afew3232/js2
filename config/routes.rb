Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 
  root 'posts#index'


  resources :users

  get 'posts/index', to: 'posts#index'
  resources :posts

  get 'homes/top', to:'homes#top'
  resources :homes

end
