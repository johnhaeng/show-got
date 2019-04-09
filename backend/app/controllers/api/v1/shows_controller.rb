class Api::V1::ShowsController < ApplicationController
  skip_before_action :authorized, only: [:index]

  def index
    @shows = Show.all
    render json: @shows
  end

  def show
    @show = Show.find(params[:id])
    render json: @show
  end

  def update
    @show = Show.find(params[:id])
    @show.update(restaurant_params)
  end

  private

  def show_params
    params.permit(:name, :date, :description, :image, :user_id, :city_id)
  end



end
