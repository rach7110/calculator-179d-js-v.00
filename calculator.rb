# require 'Bundler/setup'
# Bundler.require

require 'sinatra'

class MyApp < Sinatra::Base
  configure do
    set :views, 'views'
    set :public_folder, 'public'
  end
end

get '/' do
  erb :index
end

