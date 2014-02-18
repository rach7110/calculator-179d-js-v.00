# require 'Bundler/setup'
# Bundler.require

require 'sinatra'

get '/' do
  erb :index :views_directory => 'views'
end

