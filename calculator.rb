# require 'Bundler/setup'
# Bundler.require

# sets root as the parent-directory of the current file
set :root, File.join(File.dirname(__FILE__), '..')
# sets the view directory correctly
set :views, Proc.new { File.join(root, "views") } 

require 'sinatra'

get '/' do
  erb :test
end


