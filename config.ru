
set :views, File.dirname(__FILE__) + "/views"

require './calculator'
run Sinatra::Application
