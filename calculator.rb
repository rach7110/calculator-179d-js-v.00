require 'Bundler/setup'
Bundler.require

get '/' do
  erb :index
end