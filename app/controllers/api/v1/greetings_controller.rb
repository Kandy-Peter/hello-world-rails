class Api::V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all.limit(1).order("RANDOM()")

    render json: @greetings
  end
end
