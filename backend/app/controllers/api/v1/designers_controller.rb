class Api::V1::DesignersController < ApplicationController
  skip_before_action :authorized, only: [:index]

  def index
    @designers = Designer.all
    render json: @designers
  end

  def show
    @designer = Designer.find(params[:id])
    render json: @designer
  end

  private

  def brand_params
    params.permit(:name, :img, :city_id, :show_id, :user_id, :show_date, :description, :contact_details, :social_media)
  end

end
