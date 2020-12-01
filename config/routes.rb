Rails.application.routes.draw do
post '/auth/login', to: 'authentication#login'
get '/auth/verify', to: 'authentication#verify'
resources :users do
  resources :postings do
    resources :comments
    end
  end
end