Rails.application.routes.draw do


  resources :books
  resources :categories
  resources :members do 
    collection do 
      get :sign_in
      get :sign_up
    end
  end
  scope module: 'api',format: :json do
  	namespace :v1 do
  		resources :members
  		resources :books
      resources :categories
		  mount_devise_token_auth_for 'Member', at: 'auth',skip: [:omniauth_callbacks],controllers: {
		  	sessions: "api/v1/auth",registrations: "api/v1/registrations"
		  }
  	end
  end
 


 	root 'categories#index'
   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
