class Api::V1::CitiesController < ApplicationController
  skip_before_action :authorized, only: [:index]

  def index
    @cities = City.all
    render json: @cities
  end

  def show
    @city = City.find(params[:id])
    render json: @city
  end

  private

  def city_params
    params.permit(:name, :location, :img, :user_id)
  end

end
